import {LoginNavigation, LoginNavigationRoute} from '../../../../routes/export';

/**
 * Type LoginScreenProps
 */
export interface LoginScreenProps {
  navigation: LoginNavigation;
  route: LoginNavigationRoute;
}

/**
 * Login account responses
 */
export type LoginAPIResponse = {
  status: number;
  data: {
    email: string;
    user_name: string;
    password: string;
    token: string;
  };
  message: string;
};
