/**
 * When you call API function we are check this interface
 */
export interface HttpBodyPropsForPost {
  endPoint: string;
  payload?: LoginBody | CreateAccountBody;
}

export interface HttpParamsPropsForGet<P> {
  endPoint: string;
  payload?: P;
}

export interface PunchDetailBody {
  userId: string;
}

export interface HttpBodyPropsForGet {
  endPoint: string;
  payload?: PunchDetailBody;
}

export interface ApiEndpoint {
  createAccount: '/auth/createaccount';
  login: '/auth/login';
  getCategory: '/all-category';
  getMenuById: '/get-product-category';
  getPunchByUser: '/punch-in-out/get-punch-by-user';
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
