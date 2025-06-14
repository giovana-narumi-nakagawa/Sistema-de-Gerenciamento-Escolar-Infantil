const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize.js');

const Chatbot = sequelize.define('Chatbot', {
  pergunta: {
    type: DataTypes.STRING,
    allowNull: false
  },
  resposta: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

module.exports = Chatbot;
