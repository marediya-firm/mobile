import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ROUTES} from '../RoutesName/RoutesName';
import {HomeScreen} from '../../screen/dashbord/Home/HomeScreen';
import {ResultStack} from '../ResultsStack/ResultStack';

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={ROUTES.LandingScreen}
      defaultScreenOptions={{gestureEnabled: false}}>
      <Stack.Screen
        name={ROUTES.TabGroup}
        component={HomeScreen}
        options={{animationEnabled: true}}
      />
    </Stack.Navigator>
  );
};
