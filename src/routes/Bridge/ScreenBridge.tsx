import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ROUTES} from '../RoutesName/RoutesName';
import {TabNavigation} from '../Tab/TabNavigation';
import {ResultStack} from '../ResultsStack/ResultStack';
const Stack = createStackNavigator();

export const ScreenBridge = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={ROUTES.TabGroup}>
      <Stack.Screen

        name={ROUTES.TabGroup}
        component={TabNavigation}
        options={{animationEnabled: true}}
      />
      <Stack.Screen
        name={ROUTES.ResultStack}
        component={ResultStack}
        options={{animationEnabled: true,gestureEnabled:false}}
      />
    </Stack.Navigator>
  );
};
