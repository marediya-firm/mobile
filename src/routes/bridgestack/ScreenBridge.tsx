import React from 'react';
import {
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';
import {TabNavigation} from '../tabs/TabNavigation';
import {ScreenBridgeStackParamList} from '../export';
import {routePath} from '../routepath/export';

const Stack = createStackNavigator<ScreenBridgeStackParamList>();

const screenOptions: StackNavigationOptions = {
  headerShown: false,
  detachPreviousScreen: true,
  freezeOnBlur: true,
};

export const ScreenBridge = () => {
  
  // useEffect(() => {

  // }, [])

  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName={routePath.TabGroup}>
      <Stack.Screen name={routePath.TabGroup} component={TabNavigation} />
    </Stack.Navigator>
  );
};
