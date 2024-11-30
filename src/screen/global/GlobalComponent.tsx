import React from 'react';
import FlashMessage from 'react-native-flash-message';
import AppLoader from '../../components/AppLoader';
import MainStack from '../../routes/MainStack';
import { GetToken } from '../../hook/export';
import { MenuProvider } from 'react-native-popup-menu';
export const GlobalComponent = () => {
  const tokenValue: string = GetToken();
  return (
    <>
      {tokenValue !== 'initial' && (
        <MenuProvider>
          <MainStack />
          <AppLoader />
          <FlashMessage
            position="top"
            animated={true}
            animationDuration={1000}
          />
        </MenuProvider>
      )}
    </>
  );
};
