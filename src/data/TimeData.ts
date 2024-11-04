import { ClockIn, ClockOut, TotalHours } from '../assets/icon';
import { timeHHMM } from '../utils';

// Helper function to generate timing array
export const createTimeData = (
  punchIn: string | null,
  punchOut: string | null,
  totalTime: string,
) => [
  {
    time: punchIn ? timeHHMM(punchIn) : '00:00',
    status: 'Punch In',
    IconComponent: ClockIn,
  },
  {
    time: timeHHMM(String(punchOut ?? new Date())),
    status: punchOut ? 'Punch Out' : 'Current Time',
    IconComponent: ClockOut,
  },
  {
    time: punchIn ? totalTime : '00:00',
    status: 'Total Hours',
    IconComponent: TotalHours,
  },
];
