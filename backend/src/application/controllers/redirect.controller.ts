import { Request, Response } from 'express'
import { RedirectUrlUseCase } from '../../domain/use-cases/redirect-url.usecase'

export class RedirectController {
	constructor(private redirectUrlUseCase: RedirectUrlUseCase) {}

	async redirect(req: Request, res: Response) {
		const { slug } = req.params as { slug: string }
		const longUrl = await this.redirectUrlUseCase.execute(slug)
		return res.redirect(longUrl)
	}
}
