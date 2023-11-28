import {Sequelize} from 'sequelize';
import db from '../configs/Database.js';

const {DataTypes} = Sequelize;

const ModelMahasiswa = db.define(
  'tb_mahasiswa',
  {
    id_mhs: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    nama_mhs: {
      type: DataTypes.STRING,
    },
    nim: {
      type: DataTypes.CHAR(30),
    },
    angkatan: {
      type: DataTypes.INTEGER(5),
    },
    tempat_lahir: {
      type: DataTypes.STRING(100),
    },
    tanggal_lahir: {
      type: DataTypes.DATEONLY,
    },
    alamat_mhs: {
      type: DataTypes.TEXT,
    },
    telp_mhs: {
      type: DataTypes.CHAR(20),
    },
    jenkel: {
      type: DataTypes.ENUM('Laki-Laki','Perempuan'),
    },
    password: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    image_mhs: {
      type: DataTypes.STRING,
    },
    url: {
      type: DataTypes.STRING,
    },
    token: {
      type: DataTypes.STRING
    }
  },
  {
    freezeTableName: true,
  },
);


export default ModelMahasiswa;
