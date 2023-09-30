import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ROUTES} from '../RoutesName/RoutesName';
import {HomeStack} from '../HomeStack/HomeStack';
import {Colors} from '../../constant';
import {Home, SettingIcon} from '../../assets/icon';
import {SvgProps} from 'react-native-svg';
import {Alert, Dimensions, Text} from 'react-native';
import {Settings} from '../../screen/dashbord/Settings/Settings';
import {ActiveTabText, F50010} from '../../styling/FontStyle';
import {ScheduleStack} from '../Schedule/ScheduleStack';

const Tab = createBottomTabNavigator();
const getRouteIcon = (
  routeName: string,
): (({color, ...props}: SvgProps) => JSX.Element) => {
  let Icon = Home;
  switch (routeName) {
    case ROUTES.HomeScreen:
      Icon = Home;
      break;
    // case ROUTES.MYCAMPAIGN:
    //   Icon = MyCampaign;
    //   break;
    // case ROUTES.EARNCOINS:
    //   Icon = TabEarnCoin;
    //   break;
    case ROUTES.Settings:
      Icon = SettingIcon;
      break;
  }
  return Icon;
};

export const TabNavigation = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarStyle: {
            position: 'absolute',
            bottom: 10,
            height: Dimensions.get('screen').height / 11,
            backgroundColor: Colors.Orange,
            marginHorizontal: 15,
            borderRadius: 12,
          },
          tabBarIcon: ({focused}) => {
            const Icon = getRouteIcon(route.name);
            return <Icon color={focused ? Colors?.white : Colors?.heavyDark} />;
          },
          headerShown: false,
        })}>
        <Tab.Screen
          options={({}) => ({
            tabBarLabel: ({focused}) => (
              <Text
                style={[
                  focused ? ActiveTabText.main : F50010.main,
                  {bottom: 6},
                ]}>
                {'Home'}
              </Text>
            ),
            tabBarLabelStyle: {bottom: 4, fontSize: 12},
          })}
          name={ROUTES.HomeStack}
          component={HomeStack}
        />
        <Tab.Screen
          options={({}) => ({
            tabBarLabel: ({focused}) => (
              <Text
                style={[
                  focused ? ActiveTabText.main : F50010.main,
                  {bottom: 6},
                ]}>
                {'Home'}
              </Text>
            ),
            tabBarLabelStyle: {bottom: 4, fontSize: 12},
          })}
          name={ROUTES.Schedule}
          // listeners={({route, navigation}) => {
          //   console.log('Please', route, navigation);
          // }}
          component={ScheduleStack}
        />
        <Tab.Screen
          options={({}) => ({
            tabBarLabel: ({focused}) => (
              <Text
                style={[
                  focused ? ActiveTabText.main : F50010.main,
                  {bottom: 6},
                ]}>
                {'Settings'}
              </Text>
            ),
            tabBarLabelStyle: {bottom: 4, fontSize: 12},
          })}
          name={ROUTES.Settings}
          component={Settings}
        />
      </Tab.Navigator>
    </>
  );
};
