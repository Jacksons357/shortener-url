export interface Url {
  id: string
  slug: string
  longUrl: string
  clicks: number
}

export interface UrlResponse {
  urls: Url[]
}

export interface CreateUrlResponse {
  url: string
}
