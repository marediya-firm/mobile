import {
  NavigationAction,
  NavigationProp,
  NavigationState,
} from '@react-navigation/native';

export const navigationRoute = (
  navigation: NavigationProp<NavigationState | NavigationAction> | any,
  routesName: string,
) => {
  const {navigate} = navigation;
  return navigate(routesName);
};
