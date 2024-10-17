import { HttpPunchDetailResponse } from '../export';

export class IntialState {
  static HomeIntialState: HttpPunchDetailResponse = {
    userName: '',
    date: '',
    punchSessions: [],
    punchType: '',
    lastUpdated: '',
    userId: '',
  };
}
