import {Sequelize} from 'sequelize';
import db from '../configs/Database.js';

const {DataTypes} = Sequelize;

const ModelMatkul = db.define(
  'tb_matkul',
  {
    id_matkul: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    matkul: {
      type: DataTypes.STRING,
    },
    sks: {
      type: DataTypes.CHAR(10),
    },
  },
  {
    freezeTableName: true,
  },
);

export default ModelMatkul;
