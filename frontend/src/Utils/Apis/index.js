import axios from 'axios';
import {getStorage} from '../Storages';

const API = axios.create({baseURL: 'http://192.168.1.16:5001'});

API.interceptors.request.use(async req => {
  const response = await getStorage('profile');
  if (response?.data?.token) {
    req.headers.Authorization = `Bearer ${response?.data?.token}`;
  }
  return req;
});

export const LoginApi = async data => API.post('/auth/login', data);
export const RemoveToken = async (id, data) =>
  API.patch(`/auth/remove_token/${id}`, data);

// API BERITA
export const fetchBerita = async () => API.get('/berita');
