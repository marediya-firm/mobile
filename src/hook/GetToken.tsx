import { useEffect, useState } from 'react';
import { UserLocalStorage } from '../services/export';
import { enableFreeze } from 'react-native-screens';
import SplashScreen from 'react-native-splash-screen';

export const GetToken = (): string => {
  enableFreeze(true);
  const [tokenValue, setTokenValue] = useState('initial');

  const wantToken = async (): Promise<void> => {
    try {
      setTokenValue(await UserLocalStorage.getToken());
      setTimeout(() => {
        SplashScreen.hide();
      }, 1000);
    } catch (error) {
      SplashScreen.hide();
    }
  };

  useEffect(() => {
    wantToken();
  }, []);

  return tokenValue;
};
