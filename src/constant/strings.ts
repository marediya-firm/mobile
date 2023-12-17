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
  Facebook: 'Signup with Facebook',
  GoogleG: 'Signup with Google',
  SignUp: 'Sign Up',
  SignIn: 'Sign In',
  Welcome: 'Hi, Welcome Back! 👋',
  always: 'always',
  UserNamePlacholder: 'Enter Your Username',
  PhoneNumberPlacholder: 'Enter Your Phone Number',
  Account: 'Already have an account?',
  Login: 'Login',
  CreateAccount: 'Create an account',
  ConnectFriends: 'Connect with your friends today!',
  AlreadyAccount: ' Already have any account? Sign in',
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
