import express from 'express'
import { routes } from './infra/http/routes/routes'
import { errorHandler } from './shared/errors/handler.error'

export const app = express()

app.use(express.json())
app.use(errorHandler)

routes(app)
