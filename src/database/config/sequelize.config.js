const { Sequelize } = require("sequelize");
const dotenv = require('dotenv')
const config = require('./db.config')
dotenv.config()

const sequelize = new Sequelize({
  ...config,
  define: {
    underscored: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    timestamps: true
  },
  models: [`${__dirname}/../models`],
});

module.exports = sequelize;
