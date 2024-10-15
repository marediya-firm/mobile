import { CreateAccountInput } from './import';

class UserInput {
  constructor(props: CreateAccountInput) {
    this.header = props.header;
    (this.value = props.value),
      (this.placeHolder = props.placeHolder),
      (this.secureTextEntry = props.secureTextEntry),
      (this.apiKey = props?.apiKey || undefined);
  }
  header = '';
  value = '';
  onChangeText = (iValue: string) => (this.value = iValue);
  placeHolder = '';
  secureTextEntry = false;
  apiKey: CreateAccountInput['apiKey'];
}

export const createAccountInput: Array<CreateAccountInput> = [
  new UserInput({
    header: 'Full name',
    value: 'Mahendi',
    onChangeText: (iValue: string) => iValue,
    placeHolder: 'Mahendi hasan',
    secureTextEntry: false,
    apiKey: 'userName',
  }),
  new UserInput({
    header: 'Email',
    value: 'mahendi@gmail.com',
    onChangeText: (iValue: string) => iValue,
    placeHolder: 'mahendi@gmail.com',
    secureTextEntry: false,
    apiKey: 'email',
  }),
  new UserInput({
    header: 'Password',
    value: 'Test@123',
    onChangeText: (iValue: string) => iValue,
    placeHolder: '*********',
    secureTextEntry: true,
    apiKey: 'password',
  }),
  new UserInput({
    header: 'Confirm password',
    value: 'Test@123',
    onChangeText: (iValue: string) => iValue,
    placeHolder: '*********',
    secureTextEntry: true,
  }),
];
