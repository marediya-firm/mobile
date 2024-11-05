import React from 'react';
import './src/sheet';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { Colors } from './src/constant';
import { GlobalComponent } from './src/screen/global/GlobalComponent';
import { Dimensions, Platform, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
export const isIOS = Platform.OS === 'ios';
export const { height: deviceHeight, width: deviceWidth } =
  Dimensions.get('window');

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.white,
  },
};

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <GestureHandlerRootView style={styles.container}>
        <GlobalComponent />
      </GestureHandlerRootView>
    </NavigationContainer>
  );
};

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});

export default App;
