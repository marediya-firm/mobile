import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors} from '../../constant';
import {Home} from '../../assets/icon';
import {SvgProps} from 'react-native-svg';
import {Dimensions} from 'react-native';

const Tab = createBottomTabNavigator();

// const getRouteIcon = (
//   routeName: string,
// ): (({color, ...props}: SvgProps) => JSX.Element) => {
//   let Icon = Home;
//   switch (routeName) {
//     case ROUTES.HomeScreen:
//       Icon = Home;
//       break;
//     // case ROUTES.MYCAMPAIGN:
//     //   Icon = MyCampaign;
//     //   break;
//     // case ROUTES.EARNCOINS:
//     //   Icon = TabEarnCoin;
//     //   break;
//     // case ROUTES.SETTING:
//     //   Icon = Setting;
//     //   break;
//   }
//   return Icon;
// };

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
          },
          // tabBarIcon: ({focused}) => {
          //   const Icon = getRouteIcon(route.name);
          //   return <Icon color={focused ? Colors?.semiBlue : Colors?.blue} />;
          // },
          headerShown: false,
        })}>
        {/* <Tab.Screen
          options={({}) => ({
            tabBarLabel: 'Home',
            tabBarLabelStyle: {bottom: 4, fontSize: 12},
          })}
          name={ROUTES.HomeStack}
          component={HomeStack}
        /> */}
      </Tab.Navigator>
    </>
  );
};
