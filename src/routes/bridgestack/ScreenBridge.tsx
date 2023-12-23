import React from 'react';
import {
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';
import {TabNavigation} from '../tabs/TabNavigation';
import {ScreenBridgeStackParamList} from '../export';
import {routePath} from '../routepath/export';
import {View} from 'react-native';

const Stack = createStackNavigator<ScreenBridgeStackParamList>();

const screenOptions: StackNavigationOptions = {
  // headerShown: false,
  headerShown:false,
  detachPreviousScreen: true,
  freezeOnBlur: true,
  header: () => {
    return <View style={{}}></View>;
  },
};

export const ScreenBridge = () => {
  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName={routePath.TabGroup}>
      <Stack.Screen name={routePath.TabGroup} component={TabNavigation} />
    </Stack.Navigator>
  );
};
