import { AppError } from './app.error'

export class UrlNotFoundError extends AppError {
	constructor() {
		super('Url não encontrada!', 404)
	}
}
