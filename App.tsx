import React from 'react';
import './src/sheet';
import { NavigationContainer } from '@react-navigation/native';
import { appTheme } from './src/constant';
import { GlobalComponent } from './src/screen/global/GlobalComponent';
import { Dimensions, Platform, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SheetProvider } from 'react-native-actions-sheet';
import { NetInfoWifiState, useNetInfo } from '@react-native-community/netinfo';
import { devIp } from './src/worker/worker';

export const isIOS = Platform.OS === 'ios';
export const { height: deviceHeight, width: deviceWidth } =
  Dimensions.get('window');

const App = () => {
  const netInfo = useNetInfo() as NetInfoWifiState;

  /**
   * NOTE: This whole code is for debugging purposes because we are deploying static server we removing after publishing
   */
  devIp(netInfo);

  /**
   * Checking FraudIP Later i want to add screen
   */
  if (!netInfo.details?.ipAddress) {
    return <></>;
  }
  return (
    <NavigationContainer theme={appTheme}>
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
