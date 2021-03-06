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
> Nas instruções do projeto é indicado que o desafio deve ser elaborado em .NET, como não possuo essa stack e na descrição da vaga foi informado Node.js tomei a liberde de desenvolver em Node.js e MySQL. 


> As seguintes variávies de ambiente devem ser informadas:

SERVER_PORT - Porta do servidor<br />
WEBMOTORS_SERVER - Endereço do servidor<br />
WEBMOTORS_USER - Usuário do banco de dados<br />
WEBMOTORS_PASSWORD - Senha do banco de dados<br />
WEBMOTORS_PORT - Porta do banco de dados<br />
WEBMOTORS_DATABASE - Nome do banco de dados<br />


> Dependências utilizadas:

body-parser: 1.19.0<br />
dotenv: 10.0.0<br />
eslint: 8.1.0<br />
express: 4.17.1<br />
joi: 17.4.2<br />
mysql2: 2.3.2<br />
nodemon: 2.0.14<br />


> Instalação:

Instalação das pendenências é através do comando npm install <dependência>


> Execução:

Execução da API é através do comando npm start


> Foram desenvolvidas as seguintes rotas:


* /adverts - POST - Deverão ser informados no body da requisição os dados conforme JSON abaixo:

* /adverts - GET - Sem informar nenhum parâmetro devolve todos os registros do banco.

* /adverts/:id - GET - Informando o ID retorna o registro correspondente.

* /adverts/:id - DELETE - Deve ser informado o ID do registro a ser excluído

* /adverts/:id - PUT - Deve ser informado o ID do registro a ser alterado e no body da requisição os dados conforme JSON abaixo:

```json
{
  "marca": "string",
  "modelo": "string",
  "versao": "string",
  "ano": "int",
  "quilometragem": "int",
  "observacao": "string",
}
