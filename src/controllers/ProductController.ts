import { Request, Response } from 'express'

import Product from '../schemas/Product'

class ProductController {
  public static async get (req: Request, res: Response): Promise<Response> {
    try {
      const { q, page = 1, limit = 10 } = req.query
      const conditions = q ? { $text: { $search: q } } : {}

      const options = {
        page: Number(page),
        limit: Number(limit),
        projection: { score: { $meta: 'textScore' } },
        sort: { score: { $meta: 'textScore' } }
      }

      const result = await Product.paginate(conditions, options)

      return res.status(200).json(result)
    } catch (err) {
      console.error(err)
      return res.status(500).json()
    }
  }
}

export default ProductController
