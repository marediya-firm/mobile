import {
  CommonInterface,
  HttpLeaveDetailResponse,
  HttpPunchDetailResponse,
} from '../../https/export';
import { useHistoryZustand } from '../history/HistoryStore';
import { useHomeZustand } from '../home/HomeStore';

export type ZustandFnc = {
  useHomeZustand: typeof useHomeZustand;
  useHistoryZustand: typeof useHistoryZustand;
};

export type GlobalLoader = {
  loading: boolean;
  handleLoad: () => void;
};

/**
 * Home Stack state
 */
export type HomeStoreState = {
  data: HttpPunchDetailResponse;
};

export type HomeStoreSetter = {
  setData: (data: HttpPunchDetailResponse) => void;
};

export type SetState<Store> = (fnc: (state: Store) => void) => void;

/**
 * History Stack state
 */
export type HistoryStoreState = {
  calender: { [key: string]: HttpLeaveDetailResponse };
  attendance: HttpPunchDetailResponse[];
  caching: {
    leave: { [key: string]: HistoryStoreState['calender'] };
    punch: { [key: string]: HistoryStoreState['attendance'] };
  };
};

export type HistoryStoreSetter = {
  setData: (
    data: HttpLeaveDetailResponse[] | HistoryStoreState['calender'],
    payload?: CommonInterface,
  ) => void;
  setAttendanceData: (
    data: HttpPunchDetailResponse[],
    payload?: CommonInterface,
  ) => void;
};

export type SetterKey = HistoryStoreSetter;
