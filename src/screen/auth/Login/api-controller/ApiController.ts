import { createAccountInput } from '../../../../data/createAccountInput';
import { HttpRequest, LoginBody } from '../../../../https/export';
import { LoginNavigation, routePath } from '../../../../routes/export';
import {
  MMKVStorage,
  UserLocalStorage,
  UserPrivateKey,
  flashAlert,
} from '../../../../services/export';
import { appLoader } from '../../../../zustand/export';
import { LoginAPIResponse } from '../interface/export';

/**
 * Control create account API
 */
export const loginApiController = async (
  navigation: LoginNavigation,
): Promise<void> => {
  const flashAlertMessage = (error: string) => {
    flashAlert({
      message: error,
      description: 'Please try again',
    });
  };

  try {
    // Set API body
    appLoader();
    const apiBody: LoginBody = {
      email: '',
      password: '',
    };

    const inputArr = createAccountInput;
    for (let i = 0; i < inputArr?.length; i++) {
      const value = inputArr[i].value,
        key = inputArr[i]?.apiKey;
      if (value?.length && key) {
        apiBody[key] = value;
      }
    }

    /**
     * Login API
     */
    const result = await HttpRequest.clientPostRequest({
      endPoint: HttpRequest.apiEndPoint.login,
      payload: apiBody,
    });
    console.log('result', result);

    if (result?.data) {
      await UserLocalStorage.setValue<LoginAPIResponse['data']>(
        UserPrivateKey.UserDetail,
        result.data,
      );
      MMKVStorage.setValue<LoginAPIResponse['data']>(
        UserPrivateKey.UserDetail,
        result.data,
      );
      navigation.replace(routePath.ScreenBridge);
    } else {
      flashAlertMessage(result?.data?.message);
    }
    appLoader();
  } catch (error: any) {
    appLoader();
    flashAlertMessage(error?.message);
  }
};
