import ModelMahasiswa from '../models/ModelMahasiswa.js';
import ModelDosen from '../models/ModelDosen.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const Login = async (req, res) => {
  const {username, password, role} = req.body;
  if (username === '')
    return res.status(400).json({message: 'Username tidak boleh kosong!'});
  if (password === '')
    return res.status(400).json({message: 'Password tidak boleh kosong!'});
  if (role === '')
    return res.status(400).json({message: 'Pilih hak akses terlebih dahulu!'});

  if (role === 1) {
    try {
      const checkMahasiswa = await ModelMahasiswa.findAll({
        where: {nim: username},
      });
      if (!checkMahasiswa[0])
        return res.status(400).json({message: 'Username tidak terdaftar!'});
      const match = await bcrypt.compare(password, checkMahasiswa[0].password);
      if (!match)
        return res.status(400).json({message: 'Password anda salah!'});
      const userId = checkMahasiswa[0].id_mhs;
      const nama = checkMahasiswa[0].nama_mhs;
      const email = checkMahasiswa[0].email;

      const token = jwt.sign({userId, nama, email}, process.env.ACCESS_TOKEN, {
        expiresIn: '1d',
      });
      await ModelMahasiswa.update({token: token}, {where: {id_mhs: userId}});

      const response = {
        userId: userId,
        nama: nama,
        email: email,
        nim: checkMahasiswa[0].nim,
        angkatan: checkMahasiswa[0].angkatan,
        telpon: checkMahasiswa[0].telp_mhs,
        tanggal: checkMahasiswa[0].tanggal_lahir,
        tempat: checkMahasiswa[0].tempat_lahir,
        alamat: checkMahasiswa[0].alamat_mhs,
        jenkel: checkMahasiswa[0].jenkel,
        role: 1,
      };

      res.cookie('token', token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 *1000,
      });

      return res.status(200).json({result: response, token});
    } catch (error) {
      return res.status(500).json({message: error.message});
    }
  } else {
    try {
      const checkDosen = await ModelDosen.findAll({
        where: {nip_dosen: username},
      });
      if (!checkDosen[0])
        return res.status(400).json({message: 'Username tidak terdaftar!'});
      const match = await bcrypt.compare(password, checkDosen[0].password);
      if (!match)
        return res.status(400).json({message: 'Password anda salah!'});
      const userId = checkDosen[0].id_dosen;
      const nama = checkDosen[0].nama_dosen;
      const telpon = checkDosen[0].telp_dosen;

      const token = jwt.sign({userId, nama, telpon}, process.env.ACCESS_TOKEN, {
        expiresIn: '1d',
      });
      await ModelDosen.update({token: token}, {where: {id_dosen: userId}});

      const response = {
        userId: userId,
        nama: nama,
        telpon: telpon,
        nip: checkDosen[0].nip_dosen,
        alamat: checkDosen[0].alamat_dosen,
        jenkel: checkDosen[0].jenkel,
        image: checkDosen[0].image,
        url: checkDosen[0].url,
        role: 2,
      };
      
      res.cookie('token', token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      });

      return res.status(200).json({result: response, token});
    } catch (error) {
      return res.status(500).json({message: error.message});
    }
  }
};

export const resmoveToken = async (req, res) => {
  try {
    const userId = req.params.id;
    const {role} = req.body;

    if (role === 1) {
      await ModelMahasiswa.update({token: null}, {where: {id_mhs: userId}});
    } else {
      await ModelDosen.update({token: null}, {where: {id_dosen: userId}});
    }

    res.clearCookie('token');

    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(500);
  }
};
