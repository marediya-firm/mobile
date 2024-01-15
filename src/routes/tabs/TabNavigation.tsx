import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors} from '../../constant';
import {Dimensions} from 'react-native';
import {TabNavParamList} from '../export';
import {HomeStack} from './HomeStack/HomeStack';
import {SecondStack} from './SecondStack/export';

const Tab = createBottomTabNavigator<TabNavParamList>();

export const TabNavigation = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarStyle: {
            position: 'absolute',
            bottom: 10,
            height: Dimensions.get('screen').height / 11,
            backgroundColor: Colors.semiGreen,
            marginHorizontal: 15,
            borderRadius: 12,
            // cardOverlayEnabled: true,
            // cardShadowEnabled: true,
            // cardStyle: {direction: 'ltr', backgroundColor: 'red'},
          
          },
        })}>
        <Tab.Screen name={'HomeStack'} component={HomeStack} />
        <Tab.Screen name={'SecondStack'} component={SecondStack} />
      </Tab.Navigator>
    </>
  );
};
