import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ROUTES} from './RoutesName/RoutesName';
import {LandingScreen} from '../screen/dashbord/LandingBoard/LandingScreen';

const Tab = createBottomTabNavigator();

export const TavNavigation = () => {
  return (
    <>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name={ROUTES.LandingScreen} component={LandingScreen} />
      </Tab.Navigator>
    </>
  );
};
