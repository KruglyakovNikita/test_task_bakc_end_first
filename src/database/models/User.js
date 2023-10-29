const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize.config');

const User = sequelize.define('User',{
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  balance: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
    },
  },
});

module.exports = User;