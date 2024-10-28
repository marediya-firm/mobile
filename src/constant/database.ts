import { ClockIn, ClockOut, TotalHours } from '../assets/icon';

/**
 * clock ticks
 */
export const timingArray = [
  {
    time: '09:08 AM',
    status: 'Punch In',
    Icon: ClockIn,
  },
  {
    time: '09:08 AM',
    status: 'Punch Out',
    Icon: ClockOut,
  },
  {
    time: '09:08 AM',
    status: 'Total Hours',
    Icon: TotalHours,
  },
];

/**
 * Short name of week
 */
export const week = ['SUN', 'MON', 'TUE', 'WED', 'FRI', 'SAT'];

/**
 * Character name of week
 */
export const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
