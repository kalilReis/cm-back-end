
export class ProductDTO {
  constructor (
    readonly id: string,
    readonly name: string,
    readonly type: string,
    readonly size: string,
    readonly currentPrice: number,
    readonly previousPrice: number,
    readonly imageLinks: string[]
  ) {
    this.id = id
    this.name = name
    this.type = type
    this.size = size
    this.currentPrice = currentPrice
    this.previousPrice = previousPrice
    this.imageLinks = imageLinks
  }
}

const random = (min: number, max: number): number => {
  return Math.floor(Math.random() * max) + min
}

const generateProducts = (): ProductDTO[] => {
  const sizes = ['Solteiro', 'Solteiro Extra', 'Casal', 'Queen', 'King']
  const types = ['I', 'II', 'III']
  const products: ProductDTO[] = []

  for (let i = 0; i < 107; i++) {
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
