import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  LazyComponentSecondTab,
  ReserveStackParamList,
  authHeaderProp,
} from '../../export';
import {routePath} from '../../routepath/export';

const Stack = createStackNavigator<ReserveStackParamList>();

const lazyComponent: LazyComponentSecondTab<React.FunctionComponent> = {
  [routePath.Reserve]:
    require('../../../screen/dashboard/SecondTab/SecondTab/SecondTab').default,
};

export const ReserveStack = (): React.JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={authHeaderProp}
      initialRouteName={routePath.Reserve}>
      <Stack.Screen
        name={routePath.Reserve}
        getComponent={() => lazyComponent[routePath.Reserve]}
      />
    </Stack.Navigator>
  );
};
