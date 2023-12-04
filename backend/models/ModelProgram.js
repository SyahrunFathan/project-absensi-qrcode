import {DataTypes} from 'sequelize';
import db from '../configs/Database.js';
import ModelMahasiswa from './ModelMahasiswa.js';
import ModelDosen from './ModelDosen.js';
import ModelMatkul from './ModelMatkul.js';

const ModelProgram = db.define(
  'tb_program',
  {
    id_program: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    mhs_id: {
      type: DataTypes.INTEGER,
    },
    dosen_id: {
      type: DataTypes.INTEGER,
    },
    matkul_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
  },
);

ModelProgram.belongsTo(ModelMahasiswa, {foreignKey: 'mhs_id', as: 'mahasiswa'});
ModelProgram.belongsTo(ModelDosen, {foreignKey: 'dosen_id', as: 'dosen'});
ModelProgram.belongsTo(ModelMatkul, {foreignKey: 'matkul_id', as: 'matkul'});

export default ModelProgram;
