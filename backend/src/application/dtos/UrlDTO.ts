import z from 'zod'

export const createUrlSchema = z
	.object({
		longUrl: z
			.url({ message: 'Url inválida' })
			.min(5, 'É necessário informar uma URL completa'),
	})
	.strict()

export type CreateUrlDTO = z.infer<typeof createUrlSchema>
