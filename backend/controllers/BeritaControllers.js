import ModelBerita from '../models/ModelBerita.js';
import ModelDosen from '../models/ModelDosen.js';

export const getBerita = async (req, res) => {
  try {
    const response = await ModelBerita.findAll({
      include: {
        model: ModelDosen,
        foreignKey: 'dosen_id',
      },
    });

    if (!response[0]) return res.status(404).json({message: 'Data tidak ada!'});

    return res.status(200).json({response});
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

export const createBerita = async (req, res) => {
  const {judul, isi, dosenId} = req.body;
  if (judul === '')
    return res.status(400).json({message: 'Judul berita tidak boleh kosong!'});
  if (isi === '')
    return res.status(400).json({message: 'Isi berita tidak boleh kosong!'});
  try {
    await ModelBerita.create({
      judul_berita: judul,
      isi_berita: isi,
      dosen_id: dosenId,
    });

    return res.status(201).json({message: 'Berita berhasil di simpan!'});
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};
