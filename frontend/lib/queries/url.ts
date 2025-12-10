import { useQuery } from '@tanstack/react-query'
import { getUrls } from '@/http/url'

export const useGetUrls = () => {
  return useQuery({
    queryKey: ['urls'],
    queryFn: async () => {
      const data = await getUrls()

      return data?.urls
    },
    staleTime: 1000 * 60 * 5,
    refetchInterval: 1000,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    refetchOnReconnect: true,
  })
}
