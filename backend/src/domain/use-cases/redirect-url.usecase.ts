import { AppError } from '../../shared/errors/app.error'
import { IUrlRepository } from '../repositories/IUrlReposository'

export class RedirectUrlUseCase {
	constructor(private urlRepository: IUrlRepository) {}

	async execute(slug: string) {
		try {
			const url = await this.urlRepository.findBySlug(slug)

			if (!url) {
				throw new AppError('Url não encontrada!', 404)
			}

			await this.urlRepository.incrementClicks(url.id)

			return url.longUrl
		} catch (error) {
			throw error
		}
	}
}
