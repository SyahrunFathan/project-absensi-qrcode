import {Sequelize} from 'sequelize';
import db from '../configs/Database.js';
import ModelMatkul from './ModelMatkul.js';

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
    ruangan: {
      type: DataTypes.CHAR(20),
    },
    kelas: {
      type: DataTypes.CHAR(20),
    },
    matkul_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
  },
);

ModelJadwal.belongsTo(ModelMatkul, {foreignKey: 'matkul_id', as: 'matkul'});
ModelMatkul.hasMany(ModelJadwal, {foreignKey: 'matkul_id', as: 'jadwal'});

export default ModelJadwal;
