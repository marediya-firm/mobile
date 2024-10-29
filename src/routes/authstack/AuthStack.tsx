/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  AuthStackParamList,
  LazyComponentAuth,
  authHeaderProp,
} from '../export';
import { routePath } from '../routepath/export';

export const lazyComponent: LazyComponentAuth<React.FunctionComponent> = {
  [routePath.LoginScreen]: require('../../screen/auth/Login/LoginScreen')
    .default,
  [routePath.CreateAccount]:
    require('../../screen/auth/CreateAccount/CreateAccount').default,
};

const Stack = createStackNavigator<AuthStackParamList>();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={authHeaderProp}
      initialRouteName={routePath.LoginScreen}
    >
      <Stack.Screen
        name={routePath.LoginScreen}
        getComponent={() => lazyComponent[routePath.LoginScreen]}
      />
      <Stack.Screen
        name={routePath.CreateAccount}
        getComponent={() => lazyComponent[routePath.CreateAccount]}
      />
    </Stack.Navigator>
  );
};
