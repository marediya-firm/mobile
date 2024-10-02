import axios, {AxiosResponse} from 'axios';
import {ApiEndpoint, HttpBodyPropsForPost, HttpBodyPropsForGet} from './export';
import {UserLocalStorage} from '../services/export';

export class HttpRequest {
  /**
   * * Get Request
   * @param props endpoint and body for the API request
   * @returns AxiosResponse<T>
   */
  static async clientGetRequest<T>(
    props: HttpBodyPropsForGet,
  ): Promise<AxiosResponse<T>> {
    const {endPoint = '', payload = undefined} = props;
    try {
      const clientResult = await axios.get(endPoint, {
        params: payload,
        headers: {
          Authorization: 'Bearer ' + UserLocalStorage.token,
        },
      });
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
    const {endPoint = '', payload = {}} = props;
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
    const {endPoint = '', payload = {}} = props;
    try {
      const clientResult = await axios.patch(endPoint, {payload});
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
    const {endPoint = '', payload = {}} = props;
    try {
      const clientResult = await axios.post(endPoint, {payload});
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
    getPunchByUser: '/punch-in-out/get-punch-by-user',
  };
}
