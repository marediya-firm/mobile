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

/**
 *  Path
 */
export type Response<B, R> = { body: B; response: R };
export type HttpRequestType = {
  punchDetail: Response<PunchDetailBody, HttpPunchDetailResponse>;
  punchDetailByDate: Response<CommonInterface, HttpPunchDetailResponse[]>;
  punchInOut: Response<InOutBody, HttpPunchDetailResponse>;
  leaveDetails: Response<CommonInterface, HttpLeaveDetailResponse[]>;
};

export type Payload<R extends keyof HttpRequestType> =
  HttpRequestType[R]['body'];
/**
 * params Body
 */
export type InOutBody = { punchType: 'punch-in' | 'punch-out' };
export interface UserId {
  userId: string;
}
export type PunchDetailBody = UserId;
export interface PunchDetailByIdBody extends UserId {
  Date: string;
}
export type CommonInterface = {
  startDate: string;
  endDate: string;
};
/**
 * Punch API Response
 */
export type PunchSessions = {
  punchIn: string;
  punchOut: string;
};
export interface HttpPunchDetailResponse extends UserId {
  userName: string;
  date: string;
  punchSessions: PunchSessions[];
  punchType: 'punch-in' | 'punch-out' | '';
  lastUpdated: string;
  totalMilliseconds: number;
}

export interface HttpLeaveDetailResponse extends UserId {
  _id: string;
  userId: string;
  startDate: string;
  endDate: string;
  leaveType: string;
  reason: string;
  type: string;
  createdAt: string;
  updatedAt: string;
}

export interface ApiEndpoint {
  createAccount: '/auth/createaccount';
  login: '/auth/login';
  getCategory: '/all-category';
  getMenuById: '/get-product-category';
  getPunchByUser: 'punch/punch-details';
  getPunchDetailByDate: 'punch/punch-details-by-user-date';
  punchInOut: '/punch/punch-in-out';
  getLeaveRequest: '/leave/user-leave-requests';
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
