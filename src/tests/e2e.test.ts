/* eslint-disable no-undef */
import App from '../app'
import routes from '../routes'
import Product from '../schemas/Product'
import { generateProducts, ProductDTO } from './product-gen'
import request from 'supertest'

describe('e2e', function () {
  const app: App = new App({
    dbURI: process.env.MONGODB_URI || '',
    port: process.env.PORT || '3000'
  })

  const genProducts = generateProducts()
  const uniqueProduct = new ProductDTO('4pH65FxlKrip4L3S9Kw', 'ELqaT78J0Tc8vORrk0r', 'fKk8MXjWRoPF4Np1Hp8', 1, 2)
  beforeAll(async () => {
    app.use(routes)
    app.start()
    await Product.deleteMany({})
    genProducts.push(uniqueProduct)
    await Product.insertMany(genProducts)
  })

  it('search without queries', async () => {
    const { body } = await request(app.express).get('/products').expect(200)
    const { totalDocs, limit, totalPages, page } = body
    expect(totalDocs).toBe(genProducts.length)
    expect(limit).toBe(10)
    expect(totalPages).toBe(3)
    expect(page).toBe(1)
  })

  it('Should put the queried product at the top of the list', async () => {
    const { name, type, size } = genProducts[0]
    const q = `${name} ${type} ${size}`
    const { body } = await request(app.express).get(`/products?q=${q}`).expect(200)
    const { totalDocs, limit, totalPages, page, docs } = body

    const UNIQUE_PRODUCT = 1
    expect(totalDocs).toBe(genProducts.length - UNIQUE_PRODUCT)

    const firstProduct = docs[0]
    expect(firstProduct.name).toBe(name)
    expect(firstProduct.type).toBe(type)
    expect(firstProduct.size).toBe(size)

    expect(limit).toBe(10)
    expect(totalPages).toBe(3)
    expect(page).toBe(1)
  })

  it('Should bring only the unique product', async () => {
    const { name, type, size } = uniqueProduct
    const q = `${name} ${type} ${size}`
    const { body } = await request(app.express).get(`/products?q=${q}`).expect(200)
    const { totalDocs, limit, totalPages, page, docs } = body

    const UNIQUE_PRODUCT = 1
    expect(totalDocs).toBe(UNIQUE_PRODUCT)

    const firstProduct = docs[0]
    expect(firstProduct.name).toBe(name)
    expect(firstProduct.type).toBe(type)
    expect(firstProduct.size).toBe(size)

    expect(limit).toBe(10)
    expect(totalPages).toBe(1)
    expect(page).toBe(1)
  })

  afterAll(async () => {
    await app.stop()
  })
})
