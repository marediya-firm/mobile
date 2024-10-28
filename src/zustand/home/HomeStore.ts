import { createWithEqualityFn } from 'zustand/traditional';

import {
  deepEqual,
  HomeStoreSetter,
  HomeStoreState,
  initial,
  SetState,
} from '../export';
import { immer } from 'zustand/middleware/immer';

export const useHomeZustand = createWithEqualityFn<
  HomeStoreState & HomeStoreSetter
>()(
  immer<HomeStoreState & HomeStoreSetter>((set: SetState<HomeStoreState>) => ({
    data: initial.HomeInitialState,
    setData: (data = initial.HomeInitialState) => {
      set(state => {
        state.data = data;
      });
    },
  })),
  deepEqual,
);

export type UseHomeZustandType = ReturnType<typeof useHomeZustand>;
