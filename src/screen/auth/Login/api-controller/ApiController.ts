import {createAccountInput} from '../../../../data/createAccountInput';
import {HttpRequest, LoginBody} from '../../../../https/export';
import {LoginNavigation, routePath} from '../../../../routes/export';
import {
  UserLocalStorage,
  UserPrivateKey,
  flashAlert,
} from '../../../../services/export';
import {LoginAPIResponse} from '../interface/export';

/**
 * Control create account API
 */
export const loginApiController = async (
  navigation: LoginNavigation,
): Promise<void> => {
  try {
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

    const result = await HttpRequest.clientPostRequest<LoginAPIResponse>({
      endPoint: HttpRequest.apiEndPoint.createAccount,
      payload: apiBody,
    });

    await UserLocalStorage.setValue<LoginAPIResponse['data']>(
      UserPrivateKey.UserDetail,
      result.data.data,
    );
    
    navigation.replace(routePath.ScreenBridge);
  } catch (error: any) {
    flashAlert({
      message: error?.message as string,
      description: 'Please try again',
    });
  }
};
