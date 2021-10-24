const mysql = require('mysql2/promise');

require('dotenv').config();

const { 
  WEBMOTORS_SERVER,
  WEBMOTORS_USER,
  WEBMOTORS_PASSWORD,
  WEBMOTORS_PORT,
  WEBMOTORS_DATABASE } = process.env;

const connection = mysql.createPool({
  host: WEBMOTORS_SERVER,
  user: WEBMOTORS_USER,
  password: WEBMOTORS_PASSWORD,
  database: WEBMOTORS_DATABASE,
  port: WEBMOTORS_PORT,
});

module.exports = connection;