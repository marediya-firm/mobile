import React from 'react';
import './src/sheet';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { Colors } from './src/constant';
import { GlobalComponent } from './src/screen/global/GlobalComponent';
import { Dimensions, Platform, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SheetProvider } from 'react-native-actions-sheet';
import { NetInfoWifiState, useNetInfo } from '@react-native-community/netinfo';
import axios from './src/https/HttpInterceptor';

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
  /**
   * NOTE: This whole code is for debugging purposes because we are deploying static server we removeing after publishing
   */
  const netInfo = useNetInfo() as NetInfoWifiState;

  axios.defaults.baseURL = __DEV__
    ? `http://${netInfo.details?.ipAddress}:3000`
    : 'https://hrms-hw12.onrender.com';

  if (!netInfo.details?.ipAddress) {
    return <></>;
  }
  return (
    <NavigationContainer theme={MyTheme}>
      <SheetProvider>
        <GestureHandlerRootView style={styles.container}>
          <GlobalComponent />
        </GestureHandlerRootView>
      </SheetProvider>
    </NavigationContainer>
  );
};

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});

export default App;
