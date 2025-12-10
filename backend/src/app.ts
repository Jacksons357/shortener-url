import cors from 'cors'
import express from 'express'
import { setupSwagger } from './docs/swagger/swagger'
import { redirectRoutes } from './infra/http/routes/redirect.routes'
import { urlRoutes } from './infra/http/routes/url.routes'
import { errorHandler } from './shared/errors/handler.error'

export const app = express()

app.use(express.json())
app.use(cors())

// swagger
setupSwagger(app)

// rotas
app.use('/url', urlRoutes)
app.use('/', redirectRoutes) // => rotas de redirecionamento manter por último

// tratamento de erros
app.use(errorHandler)
