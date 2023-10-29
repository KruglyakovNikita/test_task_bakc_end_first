const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: "test_task",
  host: '127.0.0.1',
  dialect: "postgres",
  port: '5432'
};
