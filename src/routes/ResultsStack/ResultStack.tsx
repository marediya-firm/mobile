import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ROUTES} from '../RoutesName/RoutesName';
import {LandingScreen} from '../../screen/dashbord/LandingBoard';
import {Result} from '../../screen/dashbord/Result/Result';
import {ShowResults} from '../../screen/dashbord/ShowResult.tsx/ShowResults';
const Stack = createStackNavigator();

export const ResultStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      defaultScreenOptions={{gestureEnabled: false}}
      initialRouteName={ROUTES.LandingScreen}>
      <Stack.Screen
        name={ROUTES.LandingScreen}
        component={LandingScreen}
        options={{animationEnabled: true}}
      />
      <Stack.Screen
        name={ROUTES.Result}
        component={Result}
        options={{animationEnabled: true}}
      />
      <Stack.Screen
        name={ROUTES.ShowResults}
        component={ShowResults}
        options={{animationEnabled: true, presentation: 'modal'}}
      />
    </Stack.Navigator>
  );
};
