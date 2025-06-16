import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize.js';

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

export default Turma;
