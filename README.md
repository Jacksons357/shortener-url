### Instrução de uso

1. Clone o Repositorio:
```bash
git clone https://github.com/Jacksons357/shortener-url.git
```

2. Acesse a pasta backend
```bash
cd shortener-url/backend
```

3. Copie as variaveis de ambientes
```bash
cp .env.example .env
```

4. instale as dependencias
```bash
npm install
```

5. rode mysql no docker
```bash
docker run --name mysql-database \
  -e MYSQL_ROOT_PASSWORD=secret \
  -e MYSQL_DATABASE=mydb \
  -p 3306:3306 \
  -d mysql:8.0
```

se pretende usar mysql_user e password, coloque também:

```bash
-e MYSQL_USER=johndoe \
-e MYSQL_PASSWORD=randompassword \
```

6. generate prisma e migrations
```bash
npm run db:generate

npm run db:migrate
```

7. rode a api
```bash
npm run dev
```

### Pronto! 
- Api rodando em http://localhost:3333
- Documentação dos endpoints (Swagger) rodando em http://localhost:3333/docs

8. inicie o frontend
Navegue até a pasta do frontend, instale as dependências e rode a aplicação:

```bash
cd ..
cd frontend
npm install
npm run dev
```