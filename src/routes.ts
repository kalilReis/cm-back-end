import { Router } from 'express'

import ProductController from './controllers/ProductController'

const routes = Router()
routes.get('/products', ProductController.get)
routes.post('/products/reset', ProductController.reset)

export default routes
