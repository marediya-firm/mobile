import axios, {AxiosResponse} from 'axios';
import {ApiEndpoint, HttpBodyPros} from './export';


export class HttpRequest {
  /**
   * * Get Request
   * @param props endpoint and body for the API request
   * @returns AxiosResponse<T>
   */
  static async clientGetRequest<T>(
    props: HttpBodyPros,
  ): Promise<AxiosResponse<T>> {
    const {endPoint = '', payload = {}} = props;
    try {
      const clientResult = await axios.get(endPoint, payload);
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
    props: HttpBodyPros,
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
    props: HttpBodyPros,
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
   * * Delete Request
   * @param props endpoint and body for the API request
   * @returns AxiosResponse
   */

  static clientDeleteRequest = async (
    props: HttpBodyPros,
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
  };
}
