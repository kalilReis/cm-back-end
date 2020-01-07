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

ProductSchema.index({ name: 'text', type: 'text', size: 'text' })

const Product : PaginateModel<ProductType> = model('products', ProductSchema)
export default Product
