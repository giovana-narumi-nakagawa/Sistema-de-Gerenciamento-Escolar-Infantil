const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

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
