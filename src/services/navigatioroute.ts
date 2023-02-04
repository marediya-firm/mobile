import {
  NavigationAction,
  NavigationProp,
  NavigationState,
  Route,
} from '@react-navigation/native';
import {ROUTES} from '../routes/RoutesName/RoutesName';

export const navigationRoute = (
  navigation: NavigationProp<NavigationState | NavigationAction> | any,
  routesName: string,
) => {
  const {navigate} = navigation;
  switch (routesName) {
    case ROUTES.LoginScreen:
      return navigate(ROUTES.LoginScreen);
    case ROUTES.CreateAccount:
      return navigate(ROUTES.CreateAccount);
  }
};
