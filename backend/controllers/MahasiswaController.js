import ModelMahasiswa from '../models/ModelMahasiswa.js';
import bcrypt from 'bcrypt';

export const getMahasiswa = async (req, res) => {
  try {
    const response = await ModelMahasiswa.findAll();

    if (!response[0]) return res.status(404).json({message: 'Not Found'});

    return res.status(200).json({response});
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

export const getMahasiswaById = async (req, res) => {
  try {
    const response = await ModelMahasiswa.findOne({
      where: {id_mhs: req.params.id},
    });

    if (!response) return res.status(404).json({message: 'Not Found'});

    return res.status(200).json({response});
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

export const createMahasiswa = async (req, res) => {
  const {nim, nama, angkatan, tempatLahir, tanggalLahir, jenkel, email} =
    req.body;
  if (nim === '')
    return res.status(400).json({message: 'Nim tidak boleh kosong!'});
  if (nama === '')
    return res.status(400).json({message: 'Nama tidak boleh kosong!'});
  if (angkatan === '')
    return res.status(400).json({message: 'Angkatan tidak boleh kosong!'});
  if (tempatLahir === '')
    return res.status(400).json({message: 'Tempat lahir tidak boleh kosong!'});
  if (tanggalLahir === '')
    return res.status(400).json({message: 'Tanggal lahir tidak boleh kosong!'});
  if (jenkel === '')
    return res.status(400).json({message: 'Gender harus di pilih!'});
  if (email === '')
    return res.status(400).json({message: 'Email tidak boleh kosong!'});

  try {
    const checkNim = await ModelMahasiswa.findAll({where: {nim: nim}});
    if (checkNim[0])
      return res.status(400).json({message: 'Nim sudah terdaftar!'});
    const checkEmail = await ModelMahasiswa.findAll({where: {email: email}});
    if (checkEmail[0])
      return res.status(400).json({message: 'Email sudah terdaftar!'});
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(nim, salt);
    const image = 'default.png';
    const url = `${req.protocol}://${req.get('host')}/public/images/${image}`;

    await ModelMahasiswa.create({
      nim: nim,
      nama_mhs: nama,
      angkatan: angkatan,
      tempat_lahir: tempatLahir,
      tanggal_lahir: tanggalLahir,
      jenkel: jenkel,
      password: hashPassword,
      image_mhs: image,
      url: url,
      email: email,
    });

    return res.status(201).json({message: 'Mahasiswa berhasil di tambahkan!'});
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};
