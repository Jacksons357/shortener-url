import axios, { AxiosError } from 'axios'
import { toast } from 'sonner'
import type { CreateUrlResponse, UrlResponse } from '@/types/url'

export async function getUrls() {
  try {
    const response = await axios.get<UrlResponse>(
      `${process.env.NEXT_PUBLIC_API_URL}/url`,
    )
    return response.data
  } catch (error) {
    if (error instanceof AxiosError) {
      toast.error(error?.response?.data?.message || 'Erro ao buscar urls')
      throw new Error(error?.response?.data?.message)
    }
  }
}

export async function createShortUrl(longUrl: string) {
  try {
    const response = await axios.post<CreateUrlResponse>(
      `${process.env.NEXT_PUBLIC_API_URL}/url`,
      { longUrl },
    )
    return response.data
  } catch (error) {
    if (error instanceof AxiosError) {
      toast.error(error?.response?.data?.message || 'Erro ao criar url')
      throw new Error(error?.response?.data?.message)
    }
  }
}
