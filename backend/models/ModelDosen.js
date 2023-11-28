import {Sequelize} from 'sequelize';
import db from '../configs/Database.js';

const {DataTypes} = Sequelize;

const ModelDosen = db.define(
  'tb_dosen',
  {
    id_dosen: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    nip_dosen: {
      type: DataTypes.CHAR,
    },
    nama_dosen: {
      type: DataTypes.STRING,
    },
    alamat_dosen: {
      type: DataTypes.TEXT,
    },
    telp_dosen: {
      type: DataTypes.CHAR,
    },
    jenkel: {
      type: DataTypes.ENUM('Laki-Laki','Perempuan'),
    },
    image: {
      type: DataTypes.STRING,
    },
    url: {
      type: DataTypes.TEXT,
    },
    password: {
      type: DataTypes.STRING,
    },
    token: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  },
);

export default ModelDosen;
