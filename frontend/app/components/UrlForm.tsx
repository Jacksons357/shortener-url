'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Spinner } from '@/components/ui/spinner'
import { useCreateShortUrl } from '@/lib/mutation/url'

export const urlFormSchema = z.object({
  url: z.url('Digite uma URL válida').nonempty('A URL é obrigatória'),
})

export type UrlFormValues = z.infer<typeof urlFormSchema>

export default function UrlForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<UrlFormValues>({
    resolver: zodResolver(urlFormSchema),
  })

  const { mutate: createShortUrl } = useCreateShortUrl()

  const onSubmit = async (data: UrlFormValues) => {
    createShortUrl(data.url)
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-muted p-6 rounded-md border border-muted/30 w-1/3 space-y-4"
    >
      <div className="flex flex-col space-y-1">
        <Label htmlFor="url" className="text-xs ml-2">
          URL original
        </Label>
        <Input
          id="url"
          type="url"
          {...register('url')}
          className=""
          placeholder="https://exemplo.com.br..."
        />
        {errors.url && (
          <span className="text-red-600 text-xs mt-1">
            {errors.url.message}
          </span>
        )}
      </div>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? <Spinner /> : 'Encurtar'}
      </Button>
    </form>
  )
}
