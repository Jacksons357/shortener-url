import { IUrlRepository } from '../repositories/IUrlReposository'

export class FindAllUrlsUseCase {
	constructor(private urlRepository: IUrlRepository) {}

	async execute() {
		const urls = await this.urlRepository.findAll()

		const urlsWithShort = urls.map((url) => ({
			...url,
			shortUrl: `${process.env.APP_URL}/${url.slug}`,
		}))

		return {
			urls: urlsWithShort,
		}
	}
}
