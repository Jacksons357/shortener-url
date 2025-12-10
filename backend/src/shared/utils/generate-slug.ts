import crypto from 'crypto'

const CHARACTERS =
	'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

export function generateSlug(length = 6): string {
	const bytes = crypto.randomBytes(length)
	const slug = Array.from(bytes)
		.map((b) => CHARACTERS[b % CHARACTERS.length])
		.join('')
	return slug
}
