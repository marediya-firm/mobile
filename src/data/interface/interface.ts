export type CreateAccountInput = {
  header: string;
  value: string;
  onChangeText: (value: string) => void;
  placeHolder: string;
  secureTextEntry: boolean;
  apiKey?: 'userName' | 'password' | 'email';
};
