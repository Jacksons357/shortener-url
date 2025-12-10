import { AppError } from '../../shared/errors/app.error'
import { UrlNotFoundError } from '../../shared/errors/url-not-found.error'
import { IUrlRepository } from '../repositories/IUrlReposository'

export class RedirectUrlUseCase {
	constructor(private urlRepository: IUrlRepository) {}

	async execute(slug: string) {
		try {
			const url = await this.urlRepository.findBySlug(slug)

			if (!url) {
				throw new UrlNotFoundError()
			}

			await this.urlRepository.incrementClicks(url.id)

			return url.longUrl
		} catch (error) {
			throw error
		}
	}
}
