import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthStackParamList} from '../export';
import {routePath} from '../routepath/export';

const Stack = createStackNavigator<AuthStackParamList>();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={routePath.CreateAccount}>
      <Stack.Screen
        name={routePath.LoginScreen}
        getComponent={() =>require("../../screen/auth/Login/LoginScreen").default}
        options={{animationEnabled: true}}
      />
      <Stack.Screen
        getComponent={() =>require("../../screen/auth/CreateAccount/CreateAccount").default}
        name={routePath.CreateAccount}
        options={{animationEnabled: true}}
      />
    </Stack.Navigator>
  );
};
