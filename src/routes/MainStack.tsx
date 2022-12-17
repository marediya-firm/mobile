import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../screen/auth/LoginScreen';
import {ROUTES} from './RoutesName/RoutesName';
import RegisterScreen from '../screen/auth/RegisterScreen';
const Stack = createStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTES.LoginScreen} component={LoginScreen} />
      {/* <Stack.Screen name={ROUTES.AuthRegister} component={RegisterScreen} /> */}
    </Stack.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
