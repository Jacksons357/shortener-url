import { Router } from 'express'
import { createUrlSchema } from '../../../application/dtos/UrlDTO'
import { makeUrlController } from '../../factories/make-url-controller.factory'
import { validateBody } from '../middleware/validate-body.middleware'

export const urlRoutes = Router()

const controller = makeUrlController()

urlRoutes.post('/', validateBody(createUrlSchema), (req, res) =>
	controller.create(req, res),
)
