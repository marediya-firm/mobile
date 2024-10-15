import {LoginNavigation, LoginNavigationRoute} from '../../../../routes/export';
import { UserPrivateKey } from '../../../../services/export';

/**
 * Type LoginScreenProps
 */
export interface LoginScreenProps {
  data(UserDetail: UserPrivateKey, data: any): unknown;
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
