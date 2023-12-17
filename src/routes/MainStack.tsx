import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthStack, RootStackParamList, ScreenBridge} from './export';
import {routePath} from './routepath/export';

const Stack = createStackNavigator<RootStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={routePath.AuthStack}>
      <Stack.Screen
        name={routePath.AuthStack}
        component={AuthStack}
        options={{animationEnabled: true}}
      />
      <Stack.Screen
        name={routePath.ScreenBridge}
        component={ScreenBridge}
        options={{animationEnabled: true}}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
