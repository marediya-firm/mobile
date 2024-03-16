import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';
import {TabNavParamList, routePath} from '../export';
import {HomeStack} from './HomeStack/HomeStack';
import {ReserveStack} from './SecondStack/export';
import {TabUtils, style} from '../../components/export';

const Tab = createBottomTabNavigator<TabNavParamList>();

export const TabNavigation = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarStyle: style.tabBarStyle,
          tabBarShowLabel: false,
          freezeOnBlur: true,
          tabBarIcon: ({focused}: {focused: boolean}) => (
            <TabUtils tabDetail={route} focus={focused} />
          ),
        })}>
        <Tab.Screen name={routePath.HomeStack} component={HomeStack} />
        <Tab.Screen name={routePath.HotDeal} component={HotDeal} />
        <Tab.Screen name={routePath.Scanner} component={HotDeal} />
        <Tab.Screen name={routePath.Reserve} component={Reserve} />
        <Tab.Screen name={routePath.Reward} component={ReserveStack} />
      </Tab.Navigator>
    </>
  );
};

export const HotDeal: FC = () => {
  return <></>;
};

export const Reserve: FC = () => {
  return <View></View>;
};

export const Reward: FC = () => {
  return <View></View>;
};
