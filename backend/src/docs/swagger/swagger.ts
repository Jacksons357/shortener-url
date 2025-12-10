import { Application } from 'express'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const options: swaggerJSDoc.Options = {
	definition: {
		openapi: '3.0.3',
		info: {
			title: 'URL Shortener API',
			version: '1.0.0',
			description: 'API para encurtar URLs e rastrear cliques',
		},
		servers: [{ url: 'http://localhost:3333', description: 'Servidor local' }],
	},
	apis: ['./src/docs/swagger/**/*.ts'],
}

const swaggerSpec = swaggerJSDoc(options)

export function setupSwagger(app: Application) {
	app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
}
