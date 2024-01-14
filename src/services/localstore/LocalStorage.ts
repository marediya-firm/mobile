import AsyncStorage from '@react-native-async-storage/async-storage';
import {GetCacheValue, UserPrivateKey} from './interface/interface';

export class UserLocalStorage {
  static getCacheValue: GetCacheValue<string> = {};
  static token: string = '';

  /**
   * Get item
   * @param key UserPrivateKey enum
   * @returns promise which key have been pass get item will sure and return it
   * if local storage has value return cache value
   */
  static async getValue<T = {}>(
    key: UserPrivateKey,
  ): Promise<GetCacheValue<T> | string> {
    try {
      // fromJSON
      let userValue: string = '';
      // for cache management we are checking when cache exists return synchronies value
      if (this.getCacheValue[key]) {
        userValue = this.getCacheValue[key] || '';
      } else {
        userValue = (await AsyncStorage.getItem('user')) || '';
        this.getCacheValue[key] = userValue;
      }

      return userValue ? JSON.parse(userValue) : '';
    } catch (error: any) {
      return error;
    }
  }

  /**
   * Set item
   * @param key UserPrivateKey enum
   * @param payload set item in local storage
   */
  static async setValue<T = {}>(
    key: UserPrivateKey,
    payload: T,
  ): Promise<void | string> {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(payload));
    } catch (error: any) {
      return error;
    }
  }

  /**
   * Merge item
   * @param key UserPrivateKey enum
   * @param payload set item in local storage
   */
  static async mergeValue<T = {}>(
    key: UserPrivateKey,
    payload: T,
  ): Promise<void | string> {
    try {
      await AsyncStorage.mergeItem(key, JSON.stringify(payload));
    } catch (error: any) {
      return error;
    }
  }

  /**
   * Remove one item
   * @param key UserPrivateKey enum
   */
  static async removeOneValue(key: UserPrivateKey): Promise<void | string> {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error: any) {
      return error;
    }
  }

  /**
   * Clear storage
   */
  static async removeAllValue(): Promise<void | string> {
    try {
      await AsyncStorage.clear();
    } catch (error: any) {
      return error;
    }
  }

  /**
   * Get user token if exist in local storage
   * @returns
   */
  static async getToken(): Promise<string> {
    this.token = (await this.getValue<string>(
      UserPrivateKey.UserDetail,
    )) as string;
    return this.token;
  }
}
