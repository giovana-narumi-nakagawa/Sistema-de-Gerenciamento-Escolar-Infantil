import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize.js';

const Professor = sequelize.define('Professor', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  disciplina: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default Professor;