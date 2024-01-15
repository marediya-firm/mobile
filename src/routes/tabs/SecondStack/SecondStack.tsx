import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  LazyComponentSecondTab,
  SecondStackParamList,
  authHeaderProp,
} from '../../export';
import {routePath} from '../../routepath/export';

const Stack = createStackNavigator<SecondStackParamList>();

const lazyComponent: LazyComponentSecondTab<React.FunctionComponent> = {
  [routePath.SecondTab]:
    require('../../../screen/dashboard/SecondTab/SecondTab/SecondTab').default,
};

export const SecondStack = () => {
  return (
    <Stack.Navigator
      screenOptions={authHeaderProp}
      initialRouteName={routePath.SecondTab}>
      <Stack.Screen
        name={routePath.SecondTab}
        getComponent={() => lazyComponent[routePath.SecondTab]}
      />
    </Stack.Navigator>
  );
};
