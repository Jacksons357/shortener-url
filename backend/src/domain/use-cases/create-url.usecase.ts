import { AppError } from '../../shared/errors/app.error'
import { generateSlug } from '../../shared/utils/generate-slug'
import { IUrlRepository } from '../repositories/IUrlReposository'

export class CreateUrlUseCase {
	constructor(private urlRepository: IUrlRepository) {}

	async execute(longUrl: string) {
		try {
			const slug = generateSlug()

			const url = await this.urlRepository.create({
				longUrl,
				slug,
			})

			return url
		} catch (error) {
			throw new AppError('Não foi possivel criar a URL', 500)
		}
	}
}
