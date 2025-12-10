import { RedirectController } from '../../application/controllers/redirect.controller'
import { RedirectUrlUseCase } from '../../domain/use-cases/redirect-url.usecase'
import { prisma } from '../database/prisma/prisma'
import { UrlRepository } from '../database/repository/url.repository'

export function makeRedirectController() {
	const urlRepository = new UrlRepository(prisma)
	const redirectUrlUseCase = new RedirectUrlUseCase(urlRepository)

	return new RedirectController(redirectUrlUseCase)
}
