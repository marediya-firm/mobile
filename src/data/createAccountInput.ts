import {CreateAccountInput} from './import';

export const createAccountInput: Array<CreateAccountInput> = [
  {
    header: 'Full name',
    value: '',
    onChangeText: function (value: string): void {
      this.value = value;
    },
    placeHolder: 'Mahendi hasan',
    secureTextEntry: false,
  },
  {
    header: 'Email',
    value: '',
    placeHolder: 'mahendi@gmail.com',
    onChangeText: function (value: string): void {
      this.value = value;
    },
    secureTextEntry: false,
  },
  {
    header: 'Password',
    value: '',
    placeHolder: '*********',
    onChangeText: function (value: string): void {
      this.value = value;
    },
    secureTextEntry: true,
  },
  {
    header: 'Confirm password',
    value: '',
    onChangeText: function (value: string): void {
      this.value = value;
    },
    placeHolder: '*********',
    secureTextEntry: true,
  },
];
