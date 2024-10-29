import { StackNavigationProp } from '@react-navigation/stack';
import { NavigatorScreenParams, RouteProp } from '@react-navigation/native';
import { routePath } from '../export';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export interface RoutePath {
  LoginScreen: 'LoginScreen';
  CreateAccount: 'CreateAccount';
  AuthStack: 'AuthStack';
  TabGroup: 'TabGroup';
  LandingScreen: 'LandingScreen';
  ScreenBridge: 'ScreenBridge';
  HomeScreen: 'HomeScreen';
  HomeStack: 'HomeStack';
  SecondTab: 'SecondTab';
  SecondStack: 'SecondStack';
  Dashbord: 'Dashbord';
  Scanner: 'Scanner';
  History: 'History';
  Reserve: 'Reserve';
}

/**
 * Lazy component load configuration
 * All Component should import this file type safety
 * ! Don't export const import SecondTab from '../../screen/dashboard/SecondTab/SecondTab/SecondTab';
file get component don't support this file
 */

/**
 * Auth-stack lazycomponent type
 */
export type LazyComponentAuth<T> = {
  [routePath.LoginScreen]: T;
  [routePath.CreateAccount]: T;
};
/**
 * Tab lazycomponent
 */
export type LazyComponentTab<T> = {
  [routePath.HomeStack]: T;
  [routePath.SecondStack]: T;
};

/**
 * Home-stack lazycomponent type
 */
export type LazyComponentHome<T> = {
  [routePath.HomeScreen]: T;
};

export type LazyComponentSecondTab<T> = {
  [routePath.Reserve]: T;
};

/**
 * Auth Stack Route path and type
 */
export type AuthStackParamList = {
  LoginScreen: undefined;
  CreateAccount: undefined;
  ScreenBridge: undefined;
};

export type CreateAccountNavigation = StackNavigationProp<
  AuthStackParamList,
  'CreateAccount'
>;
export type CreateAccountRoute = RouteProp<AuthStackParamList, 'CreateAccount'>;

export type LoginNavigation = StackNavigationProp<
  AuthStackParamList,
  'LoginScreen'
>;
export type LoginNavigationRoute = RouteProp<AuthStackParamList, 'LoginScreen'>;

// !Tab

// export type ProfileScreenProps = CompositeScreenProps<
//   BottomTabScreenProps<TabNavParamList, 'HomeStack'>,
//   RootStackScreenProps<keyof HomeStackParamList>
// >;
export type TabNavParamList = {
  [routePath.HomeStack]: NavigatorScreenParams<HomeStackParamList>;
  [routePath.Dashbord]: undefined;
  [routePath.History]: undefined;
  [routePath.Reserve]: undefined;
  [routePath.Scanner]: undefined;
};
export type BottomTabsProps = BottomTabScreenProps<
  TabNavParamList,
  'HomeStack'
>;

/**
 *Tab Home Stack
 */
export type HomeStackParamList = {
  HomeScreen: undefined;
};

export type HomeScreenNavigation = StackNavigationProp<
  HomeStackParamList,
  'HomeScreen'
>;
export type HomeScreenRoute = RouteProp<HomeStackParamList, 'HomeScreen'>;

export type ReserveStackParamList = {
  [routePath.Reserve]: undefined;
};

export type SecondStackNavigation = StackNavigationProp<
  ReserveStackParamList,
  'Reserve'
>;
export type SecondStackRoute = RouteProp<ReserveStackParamList, 'Reserve'>;

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

declare module '@react-navigation/native' {
  export interface RootParamList
    extends RootStackParamList,
      ScreenBridgeStackParamList {}
}
