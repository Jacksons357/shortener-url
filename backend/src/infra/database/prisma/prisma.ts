import 'dotenv/config'
import { PrismaMariaDb } from '@prisma/adapter-mariadb'
import { PrismaClient } from '../client/client'

const host = process.env.DATABASE_HOST || 'localhost'
const user = process.env.DATABASE_USER || 'johndoe'
const password = process.env.DATABASE_PASSWORD || 'randompassword'
const database = process.env.DATABASE_NAME || 'mydb'

// configuração apenas para evitar erro devido a nova versão do prisma,
// que não suporta o adapter-mysql, e estamos usando Docker.

const adapter = new PrismaMariaDb({
	host,
	user,
	password,
	database,
	connectionLimit: 5,
})

export const prisma = new PrismaClient({
	adapter,
	log: ['query', 'info', 'warn', 'error'],
})
