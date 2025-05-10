import { NetInfoWifiState } from '@react-native-community/netinfo';
import axios from 'axios';

export const devIp = (netInfo: NetInfoWifiState) => {
  axios.defaults.baseURL = __DEV__
    ? `http://${netInfo.details?.ipAddress}:3000`
    : 'https://hrms-hw12.onrender.com';
};
