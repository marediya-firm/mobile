import { HttpLeaveDetailResponse } from '../../https/export';
import { HttpPunchDetailResponse } from '../export';

export class initial {
  static HomeInitialState: HttpPunchDetailResponse = {
    userName: '',
    date: '',
    punchSessions: [],
    punchType: '',
    lastUpdated: '',
    userId: '',
    totalMilliseconds: 0,
  };

  static HistoryInitialState: HttpLeaveDetailResponse[] = [
    {
      _id: '',
      userId: '',
      startDate: '',
      endDate: '',
      leaveType: '',
      reason: '',
      type: '',
      createdAt: '',
      updatedAt: '',
    },
  ];
}
