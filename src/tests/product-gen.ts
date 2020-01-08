
export class ProductDTO {
  constructor (
    readonly name: string,
    readonly type: string,
    readonly size: string,
    readonly currentPrice: number,
    readonly previousPrice: number

  ) {
    this.name = name
    this.type = type
    this.size = size
    this.currentPrice = currentPrice
    this.previousPrice = previousPrice
  }
}

export const sizes = ['Solteiro', 'Casal', 'King']
export const types = ['Classic I', 'Dahlia', 'Percal Rustic']
export const names = ['Kit Cama', 'Kit Colcha', 'Kit Banho']

export const generateProducts = (): ProductDTO[] => {
  const products: ProductDTO[] = []
  names.forEach(name => {
    types.forEach((type) => {
      sizes.forEach(size => {
        products.push(new ProductDTO(name, type, size, 199.00, 299.00))
      })
    })
  })

  return products
}
