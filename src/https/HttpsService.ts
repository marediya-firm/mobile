import axios from '../https/HttpInterceptor';
import {
  ApiEndpoint,
  HttpBodyPropsForPost,
  HttpBodyPropsForGet,
  type HttpRequestType,
} from './export';
import { AxiosResponse } from 'axios';

export class HttpRequest {
  /**
   * * Get Request
   * @param props endpoint and body for the API request
   * @returns AxiosResponse<T>
   */
  static async clientGetRequest<R extends keyof HttpRequestType>(
    props: HttpBodyPropsForGet<R>,
  ): Promise<AxiosResponse<HttpRequestType[R]['response']>> {
    const { endPoint = '', payload = undefined } = props;
    try {
      const clientResult = await axios.get(endPoint, { params: payload });
      return clientResult.data;
    } catch (error: string | any) {
      return error?.message || error;
    }
  }

  /**
   * * Post Request
   * @param props endpoint and body for the API request
   * @returns AxiosResponse<T>
   */
  static async clientPostRequest<T>(
    props: HttpBodyPropsForPost,
  ): Promise<AxiosResponse<T>> {
    const { endPoint = '', payload = {} } = props;
    try {
      return await axios.post(endPoint, payload);
    } catch (error: string | any) {
      console.log(`${endPoint}`, error);
      return error?.message || error;
    }
  }

  /**
   * * Patch Request
   * @param props endpoint and body for the API request
   * @returns AxiosResponse
   */

  static clientPatchRequest = async (
    props: HttpBodyPropsForPost,
  ): Promise<AxiosResponse> => {
    const { endPoint = '', payload = {} } = props;
    try {
      const clientResult = await axios.patch(endPoint, { payload });
      return clientResult.data;
    } catch (error: string | any) {
      return error?.message || error;
    }
  };

  /**
   * * Delete Request
   * @param props endpoint and body for the API request
   * @returns AxiosResponse
   */

  static clientDeleteRequest = async (
    props: HttpBodyPropsForPost,
  ): Promise<AxiosResponse> => {
    const { endPoint = '', payload = {} } = props;
    try {
      const clientResult = await axios.post(endPoint, { payload });
      return clientResult.data;
    } catch (error: string | any) {
      return error?.message || error;
    }
  };

  /**
   * * Api End point
   */
  static apiEndPoint: ApiEndpoint = {
    createAccount: '/auth/createaccount',
    login: '/auth/login',
    getCategory: '/all-category',
    getMenuById: '/get-product-category',
    getPunchByUser: 'punch/punch-details',
  };
}
