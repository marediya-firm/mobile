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

export type HttpRequestType = {
  punchDetail: { body: PunchDetailBody; response: HttpPunchDetailResponse };
  punchDetailByData: {
    body: PunchDetailBody;
    response: HttpPunchDetailResponse;
  };
};

/**
 * Punch API Body
 */
export interface PunchDetailBody {
  userId: string;
}
export interface PunchDetailByIdBody {
  userId: string;
  Date: string;
}

/**
 * Punch API Response
 */
export interface HttpPunchDetailResponse {
  userId: string;
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
