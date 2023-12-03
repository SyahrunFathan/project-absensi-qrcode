import {Sequelize} from 'sequelize';
import db from '../configs/Database.js';
import ModelJadwal from './ModelJadwal.js';

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
    jadwal_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
  },
);

ModelMatkul.belongsTo(ModelJadwal, {foreignKey: 'jadwal_id'});

export default ModelMatkul;
