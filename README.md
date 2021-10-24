# Teste prático de back-end Webmotors

## Contexto
O desafio consiste no desevenvolvimento de um CRUD de anúncios com os seguintes campos:


  ID: int,<br />
  marca: string,<br />
  modelo: string,<br />
  versao: string,<br />
  ano: int,<br />
  quilometragem: int,<br />
  observacao: string,<br />


Desenvolvimento:
> Nas instruções do projeto é indicado que o desafio deve ser elaborado em .NET, como não possuo essa stack e na descrição da vaga foi informado Node.js tomei a liberda de desenvolver em Node.js e MySQL. 

> As seguintes variávies de ambiente devem ser informadas:

SERVER_PORT - Porta do servidor
WEBMOTORS_SERVER - Enredereço do servidor

> Dependências utilizadas:

body-parser: 1.19.0
dotenv: 10.0.0
eslint: 8.1.0
express: 4.17.1
joi: 17.4.2
mysql2: 2.3.2
nodemon: 2.0.14

Instalação através do comando npm install <dependência>

Execução através do comando npm start

> Foram desenvolvida as seguintes rotas:


* /adverts - POST - Dverão ser informados no body da requisição os seguintes dados:

```json
{
  "marca": "string",
  "modelo": "string",
  "versao": "string",
  "ano": "int",
  "quilometragem": "int",
  "observacao": "string",
}

* /adverts - GET - Sem informar nenhum parâmetro devolve todos os registros do banco.

* /adverts/:id - GET - Informando o ID retorna o registro correspondente.

* /adverts/:id - DELETE - Deve ser informado o ID do registro a ser excluído

* /adverts/:id - PUT - Deve ser informado o ID do registro a ser alterado e no body da requisição os seguintes dados:

```json
{
  "marca": "string",
  "modelo": "string",
  "versao": "string",
  "ano": "int",
  "quilometragem": "int",
  "observacao": "string",
}

