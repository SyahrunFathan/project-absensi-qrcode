import {Sequelize} from 'sequelize';
import db from '../configs/Database.js';
import ModelSemester from './ModelSemester.js';

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
    semester_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
  },
);

ModelMatkul.belongsTo(ModelSemester, {
  foreignKey: 'semester_id',
  as: 'semester',
});

export default ModelMatkul;
