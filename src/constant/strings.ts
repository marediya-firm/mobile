import { useMemo } from 'react';

export type validationStringConstant = {
  [key: string]: (params: string) => string;
};
export type StringConstant = {
  [key in
    | 'Email'
    | 'Password'
    | 'EmailPlaceHolder'
    | 'PasswordPlaceHolder'
    | 'ForgotPassword'
    | 'Donthaveaccount'
    | 'Google'
    | 'SignUp'
    | 'SignIn'
    | 'Welcome'
    | 'always'
    | 'Account'
    | 'NotHaveAccount'
    | 'Login'
    | 'CreateAccount'
    | 'ConnectFriends'
    | 'AlreadyAccount'
    | 'LAVUs'
    | 'Restaurant'
    | 'login'
    | 'GoodMorning'
    | 'lookingFor'
    | 'FoodType'
    | 'Popular'
    | 'attendanceHistory'
    | 'Dashboard'
    | 'Logout'
    | 'LeaveRequest'
    | 'Details'
    | 'LeaveApproval'
    | 'weekEnd']: string;
};

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
  login: 'Login',
  GoodMorning: 'Good morning!',
  lookingFor: 'What are you looking for?',
  FoodType: 'Food type',
  Popular: 'Popular',
  attendanceHistory: 'Attendance History',
  Dashboard: 'Dashboard',
  Logout: 'LOGOUT',
  LeaveRequest: 'Leave Request',
  Details: 'Leave Request Details',
  LeaveApproval: 'Leave Approval',
  weekEnd: 'Week end ',
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
  useMemo<StringConstant | validationStringConstant>(() => type[props], []);
