import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthStackParamList, LazyComponent, authHeaderProp} from '../export';
import {routePath} from '../routepath/export';

export const lazyComponent: LazyComponent<React.FunctionComponent> = {
  [routePath.LoginScreen]: require('../../screen/auth/login/LoginScreen')
    .default,
  [routePath.CreateAccount]:
    require('../../screen/auth/createaccount/CreateAccount').default,
};

const Stack = createStackNavigator<AuthStackParamList>();
export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={authHeaderProp}
      initialRouteName={routePath.CreateAccount}>
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
