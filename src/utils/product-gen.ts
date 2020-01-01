import { ProductDTO } from '../schemas/Product'

const random = (min: number, max: number): number => {
  return Math.floor(Math.random() * max) + min
}

const generateProducts = (): ProductDTO[] => {
  const sizes = ['solteiro', 'solteiro extra', 'casal', 'queen', 'king']
  const types = ['I', 'II', 'III']
  const products: ProductDTO[] = []

  for (let i = 0; i < 100; i++) {
    const fios = Math.floor(Math.random() * 9) * 100
    const size = sizes[random(0, sizes.length)]
    const type = types[random(0, types.length)]
    const price = random(100.99, 600)
    const previousPrice = Number((price * 0.9).toFixed(2))
    products.push(
      new ProductDTO(
        '',
        `Kit de cama ${fios} fios`,
        `Classic ${type}`,
        size,
        price,
        previousPrice,
        []
      )
    )
  }

  return products
}

export default generateProducts
