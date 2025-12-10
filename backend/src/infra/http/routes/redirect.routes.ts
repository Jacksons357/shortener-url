import { Router } from 'express'
import { makeRedirectController } from '../../factories/make-redirect-controller.factory'

export const redirectRoutes = Router()

const controller = makeRedirectController()

redirectRoutes.get('/:slug', (req, res) => controller.redirect(req, res))
