# API - VUTTR (Very Useful Tools to Remember)

### API desenvolvida em cima do desafio proposto pela [BossaBox](https://bossabox.com/). Os requisitos para poder testar a API são:

- NodeJS
- Sequelize
- Express
- JWT
- MySQL
- npm (ou yarn)

#### Para instalar as dependências do projeto, basta usar o comando

`npm install`

Ou, caso esteja usando o **Yarn**

`yarn`

#### Após instalar as dependências do projeto, a aplicação deve ser configurada com suas informações. Acessando o arquivo:

`./src/config/database.js`

Assim preenchendo as informações de sua conexão com o banco de dados, lembrando que é útilizado o Banco MySQL nesta aplicação.

#### Com as _config_ do banco de dados configurada, é preciso adicionar a tabela ao mesmo, para isso, utilize o comando:

`npx sequelize db:migrate`

Ou, caso esteja usando o **Yarn**

`yarn sequelize db:migrate`

#### Após os passos anteriores, a aplicação esta pronta para ser executada.

`npm run dev`

ou, caso esteja usando o _Yarn_

`yarn dev`

Lembrando que a aplicação roda na porta **3000** por padrão. Porém pode ser fácilmente alterada no arquivo `./src/app.js`

Para informações com mais detalhes da API acesse [aqui](https://github.com/higorkonig/desafio-backend-bossabox/blob/master/API.md)
