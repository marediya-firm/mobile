/**
 * When you call API function we are check this interface
 */
export interface HttpBodyPros {
  endPoint: string;
  payload: LoginBody | CreateAccountBody;
}

export interface ApiEndpoint {
  createAccount: '/auth/createaccount';
  login: '/auth/login';
}

/**
 * ! Auth sections
 */
/**
 * Login Body
 */
export type LoginBody = {
  email: string;
  password: string;
  userName?: string;
};
/**
 * Create AccountBody
 */
export type CreateAccountBody = {
  email: string;
  password: string;
  userName: string;
};
