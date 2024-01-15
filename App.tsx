import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {Colors} from './src/constant';
import {GetToken} from './src/hook/GetToken';
import {GlobalComponent} from './src/screen/global/GlobalComponent';
import React = require('react');

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
      <GlobalComponent />
    </NavigationContainer>
  );
};

export default App;
