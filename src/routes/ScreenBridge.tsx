import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ROUTES} from './RoutesName/RoutesName';
import { TavNavigation } from './index';
import { CreateAccount } from '../screen/auth/CreateAccount/CreateAccount';
import { LandingScreen } from '../screen/dashbord/LandingBoard';
const Stack = createStackNavigator();

export const ScreenBridge = () => {
  return (
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={ROUTES.LandingScreen}>
          <Stack.Screen
            name={ROUTES.TabGroup}
            component={TavNavigation}
            options={{animationEnabled: true}}
          />
           <Stack.Screen
            name={ROUTES.LandingScreen}
            component={LandingScreen}
            options={{animationEnabled: true}}
          />
        </Stack.Navigator>
  );
};

