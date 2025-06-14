const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize.js');

const Turma = sequelize.define('Turma', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  turno: {
    type: DataTypes.STRING,
    allowNull: false 
  },
  faixaEtaria: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Turma;
