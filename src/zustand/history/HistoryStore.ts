import { createWithEqualityFn } from 'zustand/traditional';

import {
  deepEqual,
  HistoryStoreState,
  initial,
  SetState,
  HistoryStoreSetter,
} from '../export';
import { immer } from 'zustand/middleware/immer';
import { HttpLeaveDetailResponse } from '../../https/export';

const setterCalender = (data: HttpLeaveDetailResponse[]) => {
  const calender: HistoryStoreState['calender'] = {};
  for (let i = 0; i < data.length; i++) {
    const startDate = data[i].startDate;
    calender[new Date(startDate).getDate()] = { ...data[i] };
  }
  return calender;
};

export const useHistoryZustand = createWithEqualityFn<
  HistoryStoreState & HistoryStoreSetter
>()(
  immer<HistoryStoreState & HistoryStoreSetter>(
    (set: SetState<HistoryStoreState>) => ({
      data: initial.HistoryInitialState,
      setData: (data: HttpLeaveDetailResponse[]) => {
        set(state => {
          state.data = data;
          state.calender = setterCalender(data);
        });
      },
      calender: {},
    }),
  ),
  deepEqual,
);

export type UseHomeZustandType = ReturnType<typeof useHistoryZustand>;
