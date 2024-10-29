import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView, View } from 'react-native';
import { DashBoardStack, TabNavParamList, routePath } from '../export';
import { HomeStack } from './HomeStack/HomeStack';
import { style, TabUtils, TabUtilsProps } from '../../components/export';
import { Colors } from '../../utils';

const Tab = createBottomTabNavigator<TabNavParamList>();

const getTabBarIcon = (route: TabUtilsProps['tabDetail']) =>
  Object.assign(
    ({ focused }: { focused: boolean }) => (
      <TabUtils tabDetail={route} focus={focused} />
    ),
    { displayName: `TabIcon_${route.name}` },
  );

export const TabNavigation = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName={routePath.HomeStack}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: style.tabBarStyle,
          tabBarShowLabel: false,
          tabBarItemStyle: style.tabBarItemStyle,
          freezeOnBlur: true,
          tabBarIcon: getTabBarIcon(route),
        })}
      >
        <Tab.Screen name={routePath.HomeStack} component={HomeStack} />
        <Tab.Screen
          name={routePath.DashboardStack}
          component={DashBoardStack}
        />
        <Tab.Screen
          name={routePath.History}
          getComponent={() =>
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            require('../../screen/dashboard/History/History').default
          }
        />
      </Tab.Navigator>
      <SafeAreaView style={{ backgroundColor: Colors.white }} />
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
