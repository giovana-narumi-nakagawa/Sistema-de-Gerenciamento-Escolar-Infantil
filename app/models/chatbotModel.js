import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize.js';

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

export default Chatbot;

