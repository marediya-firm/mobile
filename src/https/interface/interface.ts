/**
 * When you call API function we are check this interface
 */
export interface HttpBodyPropsForPost {
  endPoint: string;
  payload?: LoginBody | CreateAccountBody;
}

/**
 * Http get request body and response we adjusting dynamically
 */
export interface HttpBodyPropsForGet<R extends keyof HttpRequestType> {
  endPoint: string;
  payload?: HttpRequestType[R]['body']; // Dynamically selects the correct type based on the key T
}

export type Response<B, R> = { body: B; response: R };

export type HttpRequestType = {
  punchDetail: Response<PunchDetailBody, HttpPunchDetailResponse>;
  punchDetailByData: Response<PunchDetailByIdBody, HttpPunchDetailResponse>;
  punchDetailByDate: Response<
    PunchDetailByUserDateBody,
    HttpPunchDetailResponse
  >;
};

/**
 * Punch API Body
 */
export interface UserId {
  userId: string;
}
export type PunchDetailBody = UserId;
export interface PunchDetailByIdBody extends UserId {
  Date: string;
}
export interface PunchDetailByUserDateBody extends UserId {
  startDate?: string;
  endDate?: string;
}

/**
 * Punch API Response
 */
export interface HttpPunchDetailResponse extends UserId {
  userName: string;
  date: string;
  punchSessions: string;
  punchType: string;
  lastUpdated: string;
}

export interface ApiEndpoint {
  createAccount: '/auth/createaccount';
  login: '/auth/login';
  getCategory: '/all-category';
  getMenuById: '/get-product-category';
  getPunchByUser: 'punch/punch-details';
  getPunchDetailByDate: '/punch/today-punch-details';
}

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
