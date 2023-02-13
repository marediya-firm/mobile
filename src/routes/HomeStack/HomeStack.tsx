import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { ROUTES } from '../RoutesName/RoutesName';
import { HomeScreen } from '../../screen/dashbord/Home/HomeScreen';

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={ROUTES.LandingScreen}>
          <Stack.Screen
            name={ROUTES.TabGroup}
            component={HomeScreen}
            options={{animationEnabled: true}}
          />
           {/* <Stack.Screen
            name={ROUTES.LandingScreen}
            component={LandingScreen}
            options={{animationEnabled: true}}
          /> */}
        </Stack.Navigator>
  );
};

