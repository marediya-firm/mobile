import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CommonContext } from './src/context/InputContext';
import MainStack from './src/routes/MainStack';

const App = () => {
  return (
    <CommonContext>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </CommonContext>
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
