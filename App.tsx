import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { CommonContext } from './src/context/CommonContext';
import MainStack from './src/routes/MainStack';
import FlashMessage from 'react-native-flash-message';
import AppLoader from './src/components/AppLoader';

const App = () => {
  return (
    <NavigationContainer>
      <CommonContext>
        <MainStack />
        <AppLoader />
        <FlashMessage position="top" animated={true} />
      </CommonContext>
    </NavigationContainer>
  );
};

export default App;
