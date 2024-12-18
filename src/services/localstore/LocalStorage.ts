import AsyncStorage from '@react-native-async-storage/async-storage';
import { GetCacheValue, UserPrivateKey } from './interface/interface';
import { LoginAPIResponse } from '../../screen/auth/Login/export';

export class UserLocalStorage {
  static getCacheValue: GetCacheValue<string> = {};
  static token: string | 'initial' = '';

  /**
   * Get item
   * @param key UserPrivateKey enum
   * @returns promise which key have been pass get item will sure and return it
   * if local storage has value return cache value
   */
  static async getValue<T = object>(key: UserPrivateKey): Promise<T> {
    try {
      let userValue = '';

      // for cache management we are checking when cache exists return synchronies value
      if (this.getCacheValue[key]) {
        userValue = this.getCacheValue[key] || '';
      } else {
        userValue = (await AsyncStorage.getItem(key)) || '';
        this.getCacheValue[key] = userValue;
      }
      return userValue ? JSON.parse(userValue) : '';
    } catch (error: unknown) {
      return error as T;
    }
  }

  /**
   * Set item
   * @param key UserPrivateKey enum
   * @param payload set item in local storage
   */
  static async setValue<T>(
    key: UserPrivateKey,
    payload: T,
  ): Promise<T | undefined> {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(payload));
    } catch (error: unknown) {
      return error as T;
    }
  }

  /**
   * Merge item
   * @param key UserPrivateKey enum
   * @param payload set item in local storage
   */
  static async mergeValue<T>(
    key: UserPrivateKey,
    payload: T,
  ): Promise<T | undefined> {
    try {
      await AsyncStorage.mergeItem(key, JSON.stringify(payload));
    } catch (error: unknown) {
      return error as T;
    }
  }

  /**
   * Remove one item
   * @param key UserPrivateKey enum
   */
  static async removeOneValue(key: UserPrivateKey): Promise<undefined> {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error: unknown) {
      console.log('error');
    }
  }

  /**
   * Clear storage
   */
  static async removeAllValue(): Promise<void> {
    try {
      await AsyncStorage.clear();
    } catch (error: unknown) {
      console.log('error');
    }
  }

  /**
   * Get user token if exist in local storage
   * @returns
   */
  static async getToken(): Promise<string | 'initial'> {
    const result = await this.getValue<LoginAPIResponse['data']>(
      UserPrivateKey.UserDetail,
    );
    this.token = result.token;
    return this.token;
  }
}
