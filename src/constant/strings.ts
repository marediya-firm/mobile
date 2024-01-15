import {useMemo} from 'react';

export type validationStringConstant = {
  [key: string]: (params: string) => string;
};
export interface StringConstant {
  [key: string]: string;
}

export const strings: StringConstant = {
  Email: 'Email',
  Password: 'Password',
  EmailPlaceHolder: 'example@gmail.com',
  PasswordPlaceHolder: 'Enter Your Password',
  ForgotPassword: 'Forgot Password?',
  Donthaveaccount: 'Don’t have an account?',
  Google: 'Continue with Google',
  SignUp: 'Sign Up',
  SignIn: 'Sign In',
  Welcome: 'Hi, Welcome Back! 👋',
  always: 'always',
  Account: 'Already have an account?',
  NotHaveAccount: 'Don’t have any account? Sign up',
  Login: 'Login',
  CreateAccount: 'Create an account',
  ConnectFriends: 'Connect with your friends today!',
  AlreadyAccount: ' Already have any account? Sign in',
  LAVUs: 'LAVU’s',
  Restaurant: 'Restaurant',
};

export const validationString: validationStringConstant = {
  validationMessageRequest: (params?: string) => {
    return `Please Enter Valid ${params}`;
  },
};

const type = {
  strings: strings,
  validationString: validationString,
};

export const ConstantString = (props: 'strings' | 'validationString') =>
  useMemo(() => type[props], []);
