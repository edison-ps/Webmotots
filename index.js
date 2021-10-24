const express = require('express');
const bodyParser = require('body-parser');
const advertsControllers = require('./controllers/adverts');

const { sendErrorMessage } = require('./middwares/errors');

require('dotenv').config();

const { SERVER_PORT } = process.env;

const app = express();

app.use(bodyParser.json());

app.listen(SERVER_PORT, () => console.log(`API Webmotors online na porta ${SERVER_PORT}`));

app.post('/adverts', advertsControllers.create);

app.get('/adverts', advertsControllers.getAll);

app.get('/adverts/:id', advertsControllers.getById);

app.delete('/adverts/:id', advertsControllers.remove);

app.put('/adverts/:id', advertsControllers.update);

app.use(sendErrorMessage);
