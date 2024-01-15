import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {CommonContext} from './src/context/CommonContext';
import MainStack from './src/routes/MainStack';
import FlashMessage from 'react-native-flash-message';
import AppLoader from './src/components/AppLoader';
import {Colors} from './src/constant';
import {GetToken} from './src/hook/GetToken';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.darkBlack,
  },
};

const App = () => {
  GetToken();
  return (
    <NavigationContainer theme={MyTheme}>
      <CommonContext>
        <MainStack />
        <AppLoader />
        <FlashMessage position="top" animated={true} />
      </CommonContext>
    </NavigationContainer>
  );
};

export default App;
