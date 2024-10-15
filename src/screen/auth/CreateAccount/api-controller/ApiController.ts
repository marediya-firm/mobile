import {createAccountInput} from '../../../../data/createAccountInput';
import {CreateAccountBody, HttpRequest} from '../../../../https/export';
import {CreateAccountAPIResponse} from '../export';
import {flashAlert} from '../../../../services/FlashMessage';
import {UserLocalStorage} from '../../../../services/export';
import {UserPrivateKey} from '../../../../services/localstore/interface/interface';

/**
 * Control create account API
 */
export const apiController = async (): Promise<void> => {
  try {
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
      if (value?.length && key) {
        apiBody[key] = value;
      }
    }

    // result from API
    const result =
      await HttpRequest.clientPostRequest<CreateAccountAPIResponse>({
        endPoint: HttpRequest.apiEndPoint.createAccount,
        payload: apiBody,
      });

    if (result?.data?.status === 404) {
      flashAlert({
        message: result.data.message,
        description: 'Please try again',
      });
    }

    // set local storage value
    await UserLocalStorage.setValue<CreateAccountAPIResponse['data']>(
      UserPrivateKey.UserDetail,
      result.data.data,
    );
  } catch (error: any) {
    flashAlert({
      message: error?.message as string,
      description: 'Please try again',
    });
  }
};
