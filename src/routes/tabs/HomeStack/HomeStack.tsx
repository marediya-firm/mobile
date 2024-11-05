import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeStackParamList, authHeaderProp } from '../../export';
import { routePath } from '../../routepath/export';
import HomeScreen from '../../../screen/dashboard/HomeTab/Home/HomeScreen';

const Stack = createStackNavigator<HomeStackParamList>();

// const lazyComponent: LazyComponentHome<React.FunctionComponent> = {
//   [routePath.HomeScreen]:
//     // eslint-disable-next-line @typescript-eslint/no-var-requires
//     require('../../../screen/dashboard/HomeTab/Home/HomeScreen').default,
// };

export const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={authHeaderProp}
      initialRouteName={routePath.HomeScreen}
    >
      <Stack.Screen name={routePath.HomeScreen} component={HomeScreen} />
    </Stack.Navigator>
  );
};
