// import DataService from './DataService';
import { LoginAPIResponse } from '../screen/auth/Login/export';
import { MMKVStorage, UserPrivateKey } from '../services/export';
import axios_request from 'axios';

const axios = axios_request.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

const userDetailFromLocal = () =>
  MMKVStorage.getValue<LoginAPIResponse['data']>(UserPrivateKey.UserDetail);

axios.interceptors.request.use(
  config => {
    const user = userDetailFromLocal();
    /**
     * Passing default user id in axios request
     */
    const userId = user?.userId;
    if (userId) {
      config.params = { userId, ...config.params };
    }
    config.data = { userId, ...config.data };

    config.headers.Authorization = `Bearer ${user?.token}`;
    return config;
  },
  error => {
    console.log('error', error);
  },
);

axios.interceptors.response.use(
  config => {
    return config;
  },
  error => {
    console.log('error====>>>', JSON.stringify(error));
  },
);

export default axios;
