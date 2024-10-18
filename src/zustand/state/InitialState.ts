import { HttpPunchDetailResponse } from '../export';

export class initial {
  static HomeInitialState: HttpPunchDetailResponse = {
    userName: '',
    date: '',
    punchSessions: [],
    punchType: '',
    lastUpdated: '',
    userId: '',
  };
}
