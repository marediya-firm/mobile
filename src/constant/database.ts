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
export const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

/**
 * Weekend
 */
export const weekend = ['SAT', 'SUN'];

/**
 * Character name of week
 */
export const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

export const dashBoardUtils = [
  {
    icon: CalenderIcon,
    name: strings.LeaveRequest,
  },
  {
    icon: CalenderIcon,
    name: strings.Details,
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
