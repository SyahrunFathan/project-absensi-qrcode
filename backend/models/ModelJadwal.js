import {Sequelize} from 'sequelize';
import db from '../configs/Database.js';

const {DataTypes} = Sequelize;

const ModelJadwal = db.define(
  'tb_jadwal',
  {
    id_jadwal: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    hari: {
      type: DataTypes.STRING,
    },
    jam_mulai: {
      type: DataTypes.CHAR(30),
    },
    jam_selesai: {
      type: DataTypes.CHAR(30),
    },
  },
  {
    freezeTableName: true,
  },
);

export default ModelJadwal;
