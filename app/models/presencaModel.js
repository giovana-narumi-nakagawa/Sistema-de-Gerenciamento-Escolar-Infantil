const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize.js');

const Presenca = sequelize.define('Presenca', {
  alunoId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  data: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  presente: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
});

module.exports = Presenca;
