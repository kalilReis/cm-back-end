
import App from './app'
import routes from './routes'

import dotenv from 'dotenv'
dotenv.config()

const app = new App({ dbURI: process.env.MONGODB_URI || '', port: process.env.PORT || '8080' })

app.use(routes)
app.start()
