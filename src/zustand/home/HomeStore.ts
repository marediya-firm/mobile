import { createWithEqualityFn } from 'zustand/traditional';

import {
  deepEqual,
  HomeStoreSetter,
  HomeStoreState,
  HttpPunchDetailResponse,
  initial,
  SetState,
} from '../export';
import { immer } from 'zustand/middleware/immer';

export const useHomeZustand = createWithEqualityFn<
  HomeStoreState & HomeStoreSetter
>()(
  immer<HomeStoreState & HomeStoreSetter>((set: SetState<HomeStoreState>) => ({
    data: initial.HomeInitialState,
    setData: (data: HttpPunchDetailResponse) => {
      set(state => {
        state.data = data;
      });
    },
  })),
  deepEqual,
);

export type UseHomeZustandType = ReturnType<typeof useHomeZustand>;
