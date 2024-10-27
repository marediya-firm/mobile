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
      data: initial.HistoryInitialState,
      setData: (data: HttpLeaveDetailResponse[]) => {
        set(state => {
          state.calender = setterCalender(data);
        });
      },
      calender: {},
    }),
  ),
  deepEqual,
);

export type UseHomeZustandType = ReturnType<typeof useHistoryZustand>;
