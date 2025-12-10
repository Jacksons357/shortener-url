import { Application, Router } from 'express'
import { urlRoutes } from './url.routes'

export function routes(app: Application) {
	const api = Router()

	api.use('/url', urlRoutes)
	app.use('/api', api)
}
