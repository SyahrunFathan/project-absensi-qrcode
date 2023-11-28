import axios from 'axios';
import {getStorage} from '../Storages';

const API = axios.create({baseURL: 'http://192.168.1.12:5001'});

API.interceptors.request.use(async req => {
  const response = await getStorage('profile');
  if (response?.token) {
    req.headers.Authorization = `Bearer ${response?.token}`;
  }
  return req;
});

export const LoginApi = async data => API.post('/auth/login', data);
export const RemoveToken = async (id, data) => API.patch(`/auth/remove_token/${id}`, data);
