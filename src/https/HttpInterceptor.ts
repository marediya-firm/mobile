import DataService from './DataService';
import { UserLocalStorage } from '../services/export';
import axios_request from 'axios';

const axios = axios_request.create({
  baseURL: 'http://localhost:3000',
  headers: { 'Content-Type': 'application/json' },
});

axios.interceptors.request.use(
  (config: any) => {
    console.log('======config========', config);
    config.headers.Authorization = UserLocalStorage.token || '';
    config.headers.Accept = 'application/json';
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error: any) => {
    const status = error.response ? error.response.status : null;
    // Do something with request error
    if (status === 401) {
      DataService.emit('tokenExpire', true);
    } else if (status !== 200) {
    }
    return Promise.reject(error);
  },
);

export default axios;
