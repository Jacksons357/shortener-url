import { app } from './app'

app.listen(3333, () => {
	console.log(`🚀 Server running at http://localhost:3333`)
	console.log(`🚀 Swagger running at http://localhost:3333/docs`)
})

app.get('/', (_, res) => {
	res.json({
		name: 'shortcut-url',
		version: '1.0.0',
	})
})
