import { Url } from '../../../domain/entities/Url'
import {
	CreateUrlData,
	IUrlRepository,
} from '../../../domain/repositories/IUrlReposository'
import { PrismaClient } from '../client/client'

export class UrlRepository implements IUrlRepository {
	constructor(private prisma: PrismaClient) {}

	async create(data: CreateUrlData): Promise<Url> {
		const records = await this.prisma.url.create({
			data: {
				...data,
				clicks: 0,
			},
		})

		return new Url(records)
	}
}
