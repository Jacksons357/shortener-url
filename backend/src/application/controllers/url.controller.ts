import { Request, Response } from 'express'
import { CreateUrlUseCase } from '../../domain/use-cases/create-url.usecase'
import { FindAllUrlsUseCase } from '../../domain/use-cases/find-all-url.usecase'
import { CreateUrlDTO } from '../dtos/UrlDTO'

export class UrlController {
	constructor(
		private createUrlUseCase: CreateUrlUseCase,
		private findAllUrlsUseCase: FindAllUrlsUseCase,
	) {}

	async create(req: Request, res: Response) {
		const { longUrl } = req.body as CreateUrlDTO
		const url = await this.createUrlUseCase.execute(longUrl)
		return res.status(201).json(url)
	}

	async findAll(req: Request, res: Response) {
		const urls = await this.findAllUrlsUseCase.execute()
		return res.status(200).json(urls)
	}
}
