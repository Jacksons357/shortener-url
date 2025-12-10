import express from 'express'
import { redirectRoutes } from './infra/http/routes/redirect.routes'
import { urlRoutes } from './infra/http/routes/url.routes'
import { errorHandler } from './shared/errors/handler.error'

export const app = express()

app.use(express.json())

app.use('/url', urlRoutes)

// rotas de redirecionamento manter por último
app.use('/', redirectRoutes)

app.use(errorHandler)
