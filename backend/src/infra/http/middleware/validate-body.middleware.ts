import { NextFunction, Request, Response } from 'express'
import { ZodError, ZodTypeAny } from 'zod'

export function validateBody<T extends ZodTypeAny>(schema: T) {
	return (req: Request, res: Response, next: NextFunction): void => {
		try {
			req.body = schema.parse(req.body)
			next()
		} catch (error) {
			if (error instanceof ZodError) {
				const messages = error.issues.map((issue) => issue.message)
				res.status(400).json({
					message: messages.join(', '),
				})
				return
			}

			const errorMessage =
				error instanceof Error ? error.message : 'Unknown error occurred'
			res.status(500).json({
				message: errorMessage,
			})
		}
	}
}
