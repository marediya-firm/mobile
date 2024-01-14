import {createAccountInput} from '../../../../data/createAccountInput';
import {CreateAccountBody, HttpRequest} from '../../../../https/export';
import {CreateAccountAPIResponse} from '../export';

/**
 * Control create account API
 */
export const apiController = async (): Promise<void> => {
  // Set API body
  const apiBody: CreateAccountBody = {
    email: '',
    password: '',
    userName: '',
  };

  const inputArr = createAccountInput;

  for (let i = 0; i < inputArr?.length; i++) {
    const value = inputArr[i].value,
      key = inputArr[i]?.apiKey;
    if (value?.length && key) apiBody[key] = value;
  }

  await HttpRequest.clientPostRequest<CreateAccountAPIResponse>({
    endPoint: HttpRequest.apiEndPoint.createAccount,
    payload: apiBody,
  });
};
