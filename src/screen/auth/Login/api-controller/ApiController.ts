import {createAccountInput} from '../../../../data/createAccountInput';
import {HttpRequest, LoginBody} from '../../../../https/export';
import { LoginScreenProps } from '../interface/export';

/**
 * Control create account API
 */
export const loginApiController = async (): Promise<void> => {
  // Set API body
  const apiBody: LoginBody = {
    email: '',
    password: '',
  };

  const inputArr = createAccountInput;

  for (let i = 0; i < inputArr?.length; i++) {
    const value = inputArr[i].value,
      key = inputArr[i]?.apiKey;
    if (value?.length && key) apiBody[key] = value;
  }

  await HttpRequest.clientPostRequest<LoginScreenProps>({
    endPoint: HttpRequest.apiEndPoint.createAccount,
    payload: apiBody,
  });
};
