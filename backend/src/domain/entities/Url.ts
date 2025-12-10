type UrlParams = {
	id: string
	slug: string
	longUrl: string
	clicks: number
}

export class Url {
	id: string
	slug: string
	longUrl: string
	clicks: number

	constructor(params: UrlParams) {
		this.id = params.id
		this.slug = params.slug
		this.longUrl = params.longUrl
		this.clicks = params.clicks
	}
}
