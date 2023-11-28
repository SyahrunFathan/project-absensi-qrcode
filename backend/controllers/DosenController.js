import ModelDosen from '../models/ModelDosen.js';
import bcrypt from 'bcrypt';

export const getDosen = async (req, res) => {
  try {
    const response = await ModelDosen.findAll();

    if (!response[0]) return res.status(404).json({message: 'Not Found'});

    return res.status(200).json({response});
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

export const getDosenById = async (req, res) => {
  try {
    const response = await ModelDosen.findOne({
      where: {id_dosen: req.params.id},
    });

    if (!response) return res.status(404).json({message: 'Not Found'});

    return res.status(200).json({response});
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

export const createDosen = async (req, res) => {
  const {nip, nama, alamat, telpon, jenkel} = req.body;
  if (nip === '')
    return res.status(400).json({message: 'NIP tidak boleh kosong!'});
  if (nama === '')
    return res.status(400).json({message: 'Nama tidak boleh kosong!'});
  if (alamat === '')
    return res.status(400).json({message: 'Alamat tidak boleh kosong!'});
  if (telpon === '')
    return res.status(400).json({message: 'Telpon tidak boleh kosong!'});
  if (jenkel === '')
    return res.status(400).json({message: 'Gender harus di pilih!'});

  try {
    const checkNip = await ModelDosen.findAll({where: {nip_dosen: nip}});
    if (checkNip[0])
      return res.status(400).json({message: 'NIP sudah terdaftar!'});
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(nip, salt);
    const image = 'default.png';
    const url = `${req.protocol}://${req.get('host')}/public/images/${image}`;

    await ModelDosen.create({
      nip_dosen: nip,
      nama_dosen: nama,
      alamat_dosen: alamat,
      telp_dosen: telpon,
      jenkel: jenkel,
      image: image,
      url: url,
      password: hashPassword,
    });

    return res.status(201).json({message: 'Dosen berhasil di tambahkan!'});
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};
