import {UserPrivateKey} from '../export';
import MMKV from 'react-native-mmkv';

type Maybe<T> = T | null;

export class MMKVStorage {
  static mmkv = MMKV.useMMKV();

  static getValue<T>(key: UserPrivateKey): Maybe<T> {
    try {
      const response = MMKV.useMMKV().getString(key);
      if (typeof response === 'string') {
        return JSON.parse(response) as T;
      }
      return null;
    } catch (error: any) {
      return null;
    }
  }

  static setValue(key: UserPrivateKey, value: string) {
    MMKV.useMMKV().set(key, value);
  }

  static clearValue() {
    MMKV.useMMKV().clearAll();
  }
}
