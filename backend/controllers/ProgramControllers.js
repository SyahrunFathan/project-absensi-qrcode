import ModelMatkul from '../models/ModelMatkul.js';
import ModelProgram from '../models/ModelProgram.js';

export const getProgramByMahasiswaId = async (req, res) => {
  try {
    const response = await ModelProgram.findAll({
      where: {
        mhs_id: req.params.id,
      },
      include: {
        model: ModelMatkul,
        foreignKey: 'matkul_id',
        as: 'matkul',
      },
    });

    if (!response[0])
      return res
        .status(404)
        .json({message: 'Anda Belum Memprogram Mata Kuliah!'});

    return res.status(200).json({response});
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};
