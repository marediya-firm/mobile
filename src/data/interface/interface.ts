export interface CreateAccountInput {
    header: string;
    value: string;
    onChangeText: (value: string) => void;
    placeHolder: string;
    secureTextEntry: boolean;
  }