import { UserPrivateKey } from '../export';
import { MMKV } from 'react-native-mmkv';

type Maybe<T> = T | null;

export class MMKVStorage {
  static mmkv = new MMKV();

  static getValue<T>(key: UserPrivateKey): Maybe<T> {
    try {
      const response = this.mmkv.getString(key);
      if (typeof response === 'string') {
        return JSON.parse(response) as T;
      }
      return null;
    } catch (error: unknown) {
      return null;
    }
  }

  static setValue<T>(key: UserPrivateKey, value: T) {
    const forceString = JSON.stringify(value);
    this.mmkv.set(key, forceString);
  }

  static clearValue() {
    this.mmkv.clearAll();
  }
}
