import React, {useContext, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screen/auth/Login/LoginScreen';
import {ROUTES} from './RoutesName/RoutesName';
import {CreateAccount} from '../screen/auth/CreateAccount/CreateAccount';
import {GlobalData} from '../context/CommonContext';
import {Localstorage_GetItem} from '../helper/LocalStorage.';
import {Localstorage_Key} from '../helper/LocalStorageKey';
import { ScreenBridge } from './Bridge/ScreenBridge';
const Stack = createStackNavigator();

const MainStack = () => {
  const {
    rootStore: {useDetail, setUserDetail},
  }: object | any = useContext(GlobalData);

  const getUserDetail = async () => {
    let userDetail = await Localstorage_GetItem(Localstorage_Key.USER_DETAIL);
    setUserDetail(userDetail||false);
  };

  useEffect(() => {
    getUserDetail();
    return () => {
      getUserDetail();
    };
  }, []);
    
  return (
    <>
      {useDetail == undefined || useDetail == null ? (
        <></>
      ) : (
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={useDetail?.userID?ROUTES.ScreenBridge: ROUTES.LoginScreen}>
          <Stack.Screen
            name={ROUTES.LoginScreen}
            component={LoginScreen}
            options={{animationEnabled: true}}
          />
          <Stack.Screen
            name={ROUTES.CreateAccount}
            component={CreateAccount}
            options={{animationEnabled: true}}
          />
          <Stack.Screen
            name={ROUTES.ScreenBridge}
            component={ScreenBridge}
            options={{animationEnabled: true}}
          />
        </Stack.Navigator>
      )}
    </>
  );
};

export default MainStack;
