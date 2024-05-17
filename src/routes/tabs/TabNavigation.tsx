import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Dimensions, Platform, StyleSheet, Text, View} from 'react-native';
import {TabNavParamList, routePath} from '../export';
import {HomeStack} from './HomeStack/HomeStack';
import {ReserveStack} from './SecondStack/export';
import {TabUtils} from '../../components/export';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Home} from '../../assets/icon';

const Tab = createBottomTabNavigator<TabNavParamList>();

export const TabNavigation = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: 5,
            height: Platform.OS === 'ios' ? 75 : 85,
            backgroundColor: '#151522',
            marginHorizontal: 10,
            borderRadius: Dimensions.get('screen').height * 0.1,
          },
          tabBarShowLabel: false,
          tabBarItemStyle: {
            marginTop: Platform.OS === 'ios' ? 28 : 0,
          },
          // tabBarIconStyle: {
          //   backgroundColor:"red",flex:1,height:100
          // },
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
