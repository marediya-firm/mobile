import { CalenderIcon, ClockIn, ClockOut, TotalHours } from '../assets/icon';
import { strings } from './strings';

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

export const DashBoardUtils = [
  {
    icon: CalenderIcon,
    name: strings.LeaveRequest,
  },
  {
    icon: CalenderIcon,
    name: strings.LeaveRequest + strings.Details,
  },
  {
    icon: CalenderIcon,
    name: strings.LeaveApproval,
  },
  {
    icon: CalenderIcon,
    name: strings.LeaveRequest,
  },
  {
    icon: CalenderIcon,
    name: strings.LeaveRequest,
  },
];
