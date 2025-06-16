import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize.js';

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

export default Presenca;
