import { UserPrivateKey } from '../export';
import { MMKVLoader } from 'react-native-mmkv-storage';

type Maybe<T> = T | null;

export class MMKVStorage {
  static mmkv = new MMKVLoader().initialize();

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
    this.mmkv.setString(key, forceString);
  }

  static clearValue() {
    this.mmkv.clearStore();
  }
}
