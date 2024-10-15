import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthStack, RootStackParamList, ScreenBridge, routePath} from './export';
import {UserLocalStorage} from '../services/export';

const Stack = createStackNavigator<RootStackParamList>();

const MainStack = () => {
  const token = UserLocalStorage.token;

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        freezeOnBlur: true,
        animationTypeForReplace: 'pop',
        cardOverlayEnabled: true,
        cardShadowEnabled: true,
        cardStyle: {direction: 'ltr', backgroundColor: 'red'},
      }}
      initialRouteName={!token ? routePath.AuthStack : routePath.ScreenBridge}>
      <Stack.Screen name={routePath.AuthStack} component={AuthStack} />
      <Stack.Screen name={routePath.ScreenBridge} component={ScreenBridge} />
    </Stack.Navigator>
  );
};

export default MainStack;
