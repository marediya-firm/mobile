import {
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
  data: HttpLeaveDetailResponse[];
  calender: { [key: string]: HttpLeaveDetailResponse };
};

export type HistoryStoreSetter = {
  setData: (data: HttpLeaveDetailResponse[]) => void;
};
