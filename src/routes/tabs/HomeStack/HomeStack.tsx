import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  HomeStackParamList,
  LazyComponentHome,
  authHeaderProp,
} from '../../export';
import { routePath } from '../../routepath/export';

const Stack = createStackNavigator<HomeStackParamList>();

const lazyComponent: LazyComponentHome<React.FunctionComponent> = {
  [routePath.HomeScreen]:
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('../../../screen/dashboard/HomeTab/Home/HomeScreen').default,
};

export const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={authHeaderProp}
      initialRouteName={routePath.HomeScreen}
    >
      <Stack.Screen
        name={routePath.HomeScreen}
        getComponent={() => lazyComponent[routePath.HomeScreen]}
      />
    </Stack.Navigator>
  );
};
