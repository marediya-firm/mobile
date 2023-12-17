import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

export interface RoutePath {
  LoginScreen: 'LoginScreen';
  CreateAccount: 'CreateAccount';
  AuthStack: 'AuthStack';
  TabGroup: 'TabGroup';
  LandingScreen: 'LandingScreen';
  ScreenBridge: 'ScreenBridge';
  HomeScreen: 'HomeScreen';
  HomeStack: 'HomeStack';
}

export type RootStackParamList = {
  AuthStack: undefined;
  ScreenBridge: undefined;
};

export type AuthStackParamList = {
  LoginScreen: undefined;
  CreateAccount: undefined;
};

export type ScreenBridgeStackParamList = {
  TabGroup: undefined;
};

export type CreateAccountNavigation = StackNavigationProp<
  AuthStackParamList,
  'CreateAccount'
>;
export type CreateAccountRoute = RouteProp<AuthStackParamList, 'CreateAccount'>;

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends RootStackParamList,
        ScreenBridgeStackParamList {}
  }
}
