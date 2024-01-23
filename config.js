require('dotenv').config();

const PORT = process.env.PORT || 8000;
const DB_CONNECTION = process.env.DB_CONNECTION;

module.exports = {
  PORT,
  DB_CONNECTION
}