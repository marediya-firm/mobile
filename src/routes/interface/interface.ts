import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {routePath} from '../export';

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

/**
 * Auth Stack Route path and type
 */
export type AuthStackParamList = {
  LoginScreen: undefined;
  CreateAccount: undefined;
};

export type CreateAccountNavigation = StackNavigationProp<
  AuthStackParamList,
  'CreateAccount'
>;
export type CreateAccountRoute = RouteProp<AuthStackParamList, 'CreateAccount'>;

export type LoginNavigation = StackNavigationProp<
  AuthStackParamList,
  "LoginScreen"
>;
export type LoginNavigationRoute = RouteProp<AuthStackParamList, "LoginScreen">;

/**
 * Lazy component load configuration
 * All Component should import this file type safety
 * ! Don't export const file get component don't support this file
 */
export type LazyComponent<T> = {
  [routePath.LoginScreen]: T;
  [routePath.CreateAccount]: T;
};

/**
 * Tab Route Path
 */
export type ScreenBridgeStackParamList = {
  TabGroup: undefined;
};

/**
 * Main Stack Route path and type
 */
export type RootStackParamList = {
  AuthStack: undefined;
  ScreenBridge: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends RootStackParamList,
        ScreenBridgeStackParamList {}
  }
}
