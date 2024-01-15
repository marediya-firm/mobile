import {useEffect} from 'react';
import {UserLocalStorage} from '../services/export';
import {enableFreeze} from 'react-native-screens';

export const GetToken = () => {
  enableFreeze(true);
  useEffect(() => {
    (async () => {
      await UserLocalStorage.getToken();
    })();
  }, []);
};
