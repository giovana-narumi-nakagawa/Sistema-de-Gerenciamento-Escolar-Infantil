const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize.js');

const Atividade = sequelize.define('Atividade', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  dataEntrega: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  turmaId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Atividade;
