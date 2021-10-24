const express = require('express');
const bodyParser = require('body-parser');
const userControllers = require('./controllers/users');

const { sendErrorMessage } = require('./middwares/errors');

require('dotenv').config();

const { SERVER_PORT } = process.env;

const app = express();

app.use(bodyParser.json());

app.listen(SERVER_PORT, () => console.log(`API online na porta ${SERVER_PORT}`));

app.post('/adverts', advertsControllers.login);

app.use(sendErrorMessage);
