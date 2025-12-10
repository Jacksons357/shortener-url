import { Url } from '../entities/Url'

export interface CreateUrlData {
	slug: string
	longUrl: string
}

export interface IUrlRepository {
	create(data: CreateUrlData): Promise<Url>
	findBySlug(slug: string): Promise<Url | null>
	incrementClicks(id: string): Promise<void>
	findAll(): Promise<Url[]>
}
