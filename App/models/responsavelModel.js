const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Responsavel = sequelize.define('Responsavel', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  parentesco: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Responsavel;
