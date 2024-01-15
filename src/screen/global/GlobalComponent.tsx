import React from 'react';
import FlashMessage from 'react-native-flash-message';
import AppLoader from '../../components/AppLoader';
import MainStack from '../../routes/MainStack';

export const GlobalComponent = () => {
  return (
    <React.Fragment>
      <MainStack />
      <AppLoader />
      <FlashMessage position="top" animated={true} />
    </React.Fragment>
  );
};
