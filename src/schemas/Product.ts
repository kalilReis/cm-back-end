import { PaginateModel, Schema, model, Document } from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'

export interface ProductType extends Document {
  readonly id: string
  readonly name: string
  readonly type: string
  readonly size: string
  readonly currentPrice: number
  readonly previousPrice: number
  readonly imageLinks: string[]
}

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

const ProductSchema = new Schema(
  {
    name: String,
    type: String,
    size: String,
    currentPrice: String,
    previousPrice: String,
    imageLinks: [String]
  },
  {
    timestamps: true
  }
)

ProductSchema.plugin(mongoosePaginate)

ProductSchema.index({ '$**': 'text' })

const Product : PaginateModel<ProductType> = model('products', ProductSchema)
export default Product
// export default model<ProductType>('products', ProductSchema)
