import {DataTypes} from 'sequelize';
import db from '../configs/Database.js';

const ModelSemester = db.define(
  'tb_semester',
  {
    id_semester: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.ENUM('Ganjil', 'Genap'),
    },
    tahun: {
      type: DataTypes.INTEGER(5),
    },
    semester: {
      type: DataTypes.INTEGER(10),
    },
    semester_akademik: {
      type: DataTypes.CHAR(50),
    },
  },
  {
    freezeTableName: true,
  },
);

export default ModelSemester;
