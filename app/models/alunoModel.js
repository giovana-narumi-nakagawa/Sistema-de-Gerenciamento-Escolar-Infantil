const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize.js');

const Aluno = sequelize.define('Aluno', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  idade: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  turmaId: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
});

module.exports = Aluno;
