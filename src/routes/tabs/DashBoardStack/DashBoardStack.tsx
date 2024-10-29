import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  LazyComponentSecondTab,
  ReserveStackParamList,
  authHeaderProp,
} from '../../export';
import { routePath } from '../../routepath/export';

const Stack = createStackNavigator<ReserveStackParamList>();

const lazyComponent: LazyComponentSecondTab<React.FunctionComponent> = {
  [routePath.Dashboard]:
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('../../../screen/dashboard/dashboard/DashBoardScreen').default,
};

export const DashBoardStack = (): React.JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={authHeaderProp}
      initialRouteName={routePath.Dashboard}
    >
      <Stack.Screen
        name={routePath.Dashboard}
        getComponent={() => lazyComponent[routePath.Dashboard]}
      />
    </Stack.Navigator>
  );
};
