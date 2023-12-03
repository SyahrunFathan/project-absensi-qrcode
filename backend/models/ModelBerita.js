import {Sequelize} from 'sequelize';
import db from '../configs/Database.js';
import ModelDosen from './ModelDosen.js';

const {DataTypes} = Sequelize;

const ModelBerita = db.define(
  'tb_berita',
  {
    id_berita: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    judul_berita: {
      type: DataTypes.STRING,
    },
    isi_berita: {
      type: DataTypes.TEXT,
    },
    dosen_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
  },
);

ModelBerita.belongsTo(ModelDosen, {foreignKey: 'dosen_id'});

export default ModelBerita;
