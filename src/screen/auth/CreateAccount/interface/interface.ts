import {
  CreateAccountNavigation,
  CreateAccountRoute,
} from '../../../../routes/export';

/**
 * type CreateAccount page
 */
export type CreateAccountProps = {
  navigation: CreateAccountNavigation;
  route: CreateAccountRoute;
};

/**
 * Create account responses
 */
export type CreateAccountAPIResponse = {
  status: number;
  data: {
    email: string;
    user_name: string;
    password: string;
    token: string;
  };
  message: string;
};
