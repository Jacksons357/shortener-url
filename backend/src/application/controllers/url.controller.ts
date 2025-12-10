import { Request, Response } from 'express'
import { CreateUrlUseCase } from '../../domain/use-cases/create-url.usecase'
import { CreateUrlDTO } from '../dtos/UrlDTO'

export class UrlController {
	constructor(private createUrlUseCase: CreateUrlUseCase) {}

	async create(req: Request, res: Response) {
		const { longUrl } = req.body as CreateUrlDTO
		const url = await this.createUrlUseCase.execute(longUrl)
		return res.status(201).json(url)
	}
}
