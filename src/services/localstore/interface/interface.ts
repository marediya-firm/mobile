export enum UserPrivateKey {
  UserDetail = 'UserDetail',
}

export type GetCacheValue<T> = {
  [key in UserPrivateKey]?: T;
};
