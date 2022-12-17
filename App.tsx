import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import MainStack from './src/routes/MainStack';
import {LoginScreen} from './src/screen/auth/LoginScreen';

const App = () => {
  return (
    <NavigationContainer>
      {/* <View style={{ flex: 1, backgroundColor: "white" }}> */}
      {/* <LoginScreen /> */}
      <MainStack />
      {/* </View> */}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
