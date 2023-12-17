import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TabNavigation} from '../tabs/TabNavigation';
import {ScreenBridgeStackParamList} from '../export';
import {routePath} from '../routepath/export';

const Stack = createStackNavigator<ScreenBridgeStackParamList>();

export const ScreenBridge = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={routePath.TabGroup}>
      <Stack.Screen
        name={routePath.TabGroup}
        component={TabNavigation}
        options={{animationEnabled: true}}
      />
    </Stack.Navigator>
  );
};
