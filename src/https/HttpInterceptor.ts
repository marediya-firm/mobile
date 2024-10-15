// import DataService from './DataService';
import { LoginAPIResponse } from '../screen/auth/Login/export';
import { MMKVStorage, UserPrivateKey } from '../services/export';
import axios_request from 'axios';

const axios = axios_request.create({
  baseURL: 'http://localhost:3000',
  headers: { 'Content-Type': 'application/json' },
});

axios.interceptors.request.use(
  config => {
    config.headers.Authorization =
      MMKVStorage.getValue<LoginAPIResponse['data']>(UserPrivateKey.UserDetail)
        ?.token || '';
    config.headers.Accept = 'application/json';
    config.headers['Content-Type'] = 'application/json';
    console.log(' authentication', config.params);

    return config;
  },
  error => {
    console.log('error', error);

    // const status = error.response ? error.response.status : null;
    // Do something with request error
    // if (status === 401) {
    //   DataService.emit('tokenExpire', true);
    // }
    // return Promise.reject(error);
  },
);

export default axios;
