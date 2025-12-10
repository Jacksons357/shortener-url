import { UrlController } from '../../application/controllers/url.controller'
import { CreateUrlUseCase } from '../../domain/use-cases/create-url.usecase'
import { prisma } from '../database/prisma/prisma'
import { UrlRepository } from '../database/repository/url.repository'

export function makeUrlController() {
	const urlRepository = new UrlRepository(prisma)
	const createUrlUseCase = new CreateUrlUseCase(urlRepository)

	return new UrlController(createUrlUseCase)
}
