import { Request, Response } from 'express'
import Product, { ProductDTO, ProductType } from '../schemas/Product'
import generateProducts from '../utils/product-gen'

const toDTO = (p: ProductType): ProductDTO =>
  new ProductDTO(
    p._id,
    p.name,
    p.type,
    p.size,
    p.currentPrice,
    p.previousPrice,
    p.imageLinks)

class ProductController {
  public static async get (req: Request, res: Response): Promise<Response> {
    try {
      const { q, page, perPage } = req.query
      const conditions = q ? { $text: { $search: q } } : {}
      const options = {
        page: Number(page),
        perPage: Number(perPage)
      }

      const result = await Product.paginate(conditions, options)
      const dtos = result.data.map(toDTO)

      return res.status(200).json({ data: dtos, pagination: result.pagination })
    } catch (err) {
      console.error(err)
      return res.status(500).json()
    }
  }

  public static async reset (req: Request, res: Response): Promise<Response> {
    try {
      await Product.deleteMany({})
      generateProducts().forEach((element) => {
        Product.create({ ...element })
      })
      return res.status(200).json()
    } catch (err) {
      return res.status(500).json()
    }
  }
}

export default ProductController
