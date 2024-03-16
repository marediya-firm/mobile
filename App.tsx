import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {Colors} from './src/constant';
import {GlobalComponent} from './src/screen/global/GlobalComponent';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.darkBlack,
  },
};

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <GlobalComponent />
    </NavigationContainer>
  );
};

export default App;
