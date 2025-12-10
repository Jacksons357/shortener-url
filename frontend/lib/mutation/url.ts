import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import { createShortUrl } from '@/http/url'
import queryClient from '../query'

export const useCreateShortUrl = () => {
  return useMutation({
    mutationFn: async (longUrl: string) => await createShortUrl(longUrl),
    onSuccess: () => {
      toast.success('Url criada com sucesso')
      queryClient.invalidateQueries({ queryKey: ['urls'] })
    },
    onError: (error) => {
      toast.error(error?.message || 'Erro ao criar url')
    },
  })
}
