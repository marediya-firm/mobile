import { createWithEqualityFn } from 'zustand/traditional';

import {
  deepEqual,
  HistoryStoreState,
  SetState,
  HistoryStoreSetter,
} from '../export';
import { immer } from 'zustand/middleware/immer';
import { CommonInterface, HttpLeaveDetailResponse } from '../../https/export';

const setterCalender = (data: HttpLeaveDetailResponse[]) => {
  const calender: HistoryStoreState['calender'] = {};
  const getDay = (date: string) => new Date(date).getDate();

  for (let i = 0; i < data.length; i++) {
    const startDate = getDay(data[i].startDate);
    const endDate = getDay(data[i].endDate);

    for (let j = startDate; j < endDate; j++) {
      calender[j] = data[i];
    }
  }
  return calender;
};

export const useHistoryZustand = createWithEqualityFn<
  HistoryStoreState & HistoryStoreSetter
>()(
  immer<HistoryStoreState & HistoryStoreSetter>(
    (set: SetState<HistoryStoreState>) => ({
      attendance: [],
      caching: { leave: {}, punch: {} },
      calender: {},
      setData: (data, payload) => {
        set(state => {
          state.calender = Array.isArray(data) ? setterCalender(data) : data;
          /**
           * Storing cache value
           */
          setCaching('leave', 'calender', state, payload);
        });
      },
      setAttendanceData: (data, payload) => {
        set(state => {
          state.attendance = data;
          /**
           * Storing cache value
           */
          setCaching('punch', 'attendance', state, payload);
        });
      },
    }),
  ),
  deepEqual,
);

export type UseHomeZustandType = ReturnType<typeof useHistoryZustand>;

const setCaching = (
  key: keyof HistoryStoreState['caching'],
  setterKey: keyof Omit<HistoryStoreState, 'caching'>,
  state: HistoryStoreState,
  payload?: CommonInterface,
) => {
  /**
   * Check if the caching key exists the
   * caching key @param key is look like 2024-10-01
   */
  if (!state.caching[key]?.[payload?.startDate ?? '']) {
    (state.caching[key] as unknown) = {
      [payload?.startDate ?? '']: state[setterKey],
    };
  }
};
