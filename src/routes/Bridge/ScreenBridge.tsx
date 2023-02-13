import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ROUTES} from '../RoutesName/RoutesName';
import {CreateAccount} from '../../screen/auth/CreateAccount/CreateAccount';
import {LandingScreen} from '../../screen/dashbord/LandingBoard';
import {TabNavigation} from '../Tab/TabNavigation';
import {Result} from '../../screen/dashbord/Result/Result';
import { ResultStack } from '../ResultsStack/ResultStack';
const Stack = createStackNavigator();

export const ScreenBridge = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={ROUTES.ResultStack}>
      <Stack.Screen
        name={ROUTES.TabGroup}
        component={TabNavigation}
        options={{animationEnabled: true}}
      />
      <Stack.Screen
        name={ROUTES.ResultStack}
        component={ResultStack}
        options={{animationEnabled: true}}
      />
    </Stack.Navigator>
  );
};
