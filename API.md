FORMAT: 1A
HOST: http://localhost:3000/

# Group VUTTR

Recursos relacionados às ferramentas disponíveis nesta API.

## Users [/users]

Um User possui os seguintes atributos:

- id
- name
- email
- password

### Cadastrando um usuário [POST]

- Request (application/json)

```json
{
	"name": "Higor Konig",
	"email": "higor.konig@gmail.com",
	"password": "1234"
}
```

- Response 200 (application/json)

```json
{
	"id": 1,
	"name": "Higor Konig",
	"email": "higor.konig@gmail.com"
}
```

## Login [/login]

### Efetuando o login [POST]

- Request (application/json)

```json
{
	"email": "higor.konig@gmail.com",
	"password": "1234"
}
```

- Response 200 (application/json)

```json
{
	"user": {
		"id": 1,
		"name": "Higor Konig",
		"email": "higor.konig@gmail.com"
	},
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTc2NjA1MzQyLCJleHAiOjE1NzY3NzgxNDJ9.V9E7srvmbBFWch_aw5lyRDGxP_Yih-n3NJR1Zfbsu6c"
}
```

A partir de agora, o `token` que aparece na response, será utilizado em qualquer requisição daqui para frente

## Tool [/tools]

Uma Tool possui os seguintes atributos:

- id
- title
- link
- description
- tags (um array de tags associados à Tool)

### Criar uma nova Tool [POST]

- Request

  - Headers

  Content-Type: `application/json`

  Authorization: `Bearer *token*`

```json
{
	"title": "github",
	"link": "https://github.com",
	"description": "Uma plataforma de hospedagem de código-fonte com controle de versão usando o Git.",
	"tags": ["node", "reactjs", "javascript", "php"]
}
```

- Response 200 (application/json)

```json
{
	"id": 1,
	"title": "github",
	"link": "https://github.com",
	"description": "Uma plataforma de hospedagem de código-fonte com controle de versão usando o Git.",
	"tags": ["node", "reactjs", "javascript", "php"],
	"user_id": 1
}
```

### Listar todas as Tools do usuário logado [GET]

- Request

  - Headers

  Authorization: `Bearer *token*`

- Response 200 (application/json)

```json
[
	{
		"id": 1,
		"title": "github",
		"link": "https://github.com",
		"description": "Uma plataforma de hospedagem de código-fonte com controle de versão usando o Git.",
		"tags": "[\"node\",\"reactjs\",\"javascript\",\"php\"]"
	}
]
```

## Tool [/tools?tag={filtro}]

Filtra as Tools de acordo com a tag informada na URL. São listadas apenas as tagueadas com a informação informada na URL.

Parâmetros:

- filtro - a tag que será utilizada como filtro

### Filtrar Tools por tags [GET]

- Request

  - Headers

  Authorization: `Bearer *token*`
  

- Response 200 (application/json)

```json
[
	{
		"id": 1,
		"title": "github",
		"link": "https://github.com",
		"description": "Uma plataforma de hospedagem de código-fonte com controle de versão usando o Git.",
		"tags": "[\"node\",\"reactjs\",\"javascript\",\"php\"]"
	}
]
```

## Tool [/tools/{id}]

Parâmetros:

- id - o id da Tool

### Deleta uma tool [DELETE]

- Request

  - Headers

  Authorization: `Bearer *token*`


+ Response 200 (application/json)

  ```json
  {
  	"message": "Deletado com sucesso"
  }
  ```
