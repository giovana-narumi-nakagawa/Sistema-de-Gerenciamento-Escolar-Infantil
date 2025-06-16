import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize.js';

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

export default Responsavel;
