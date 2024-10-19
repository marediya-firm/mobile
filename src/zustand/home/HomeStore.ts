import { create } from 'zustand';
import {
  HomeStoreSetter,
  HomeStoreState,
  HttpPunchDetailResponse,
  initial,
  SetState,
} from '../export';
import { immer } from 'zustand/middleware/immer';

export const useHomeZustand = create<HomeStoreState & HomeStoreSetter>()(
  immer<HomeStoreState & HomeStoreSetter>((set: SetState<HomeStoreState>) => ({
    data: initial.HomeInitialState,
    setData: (data: HttpPunchDetailResponse) => {
      set(state => {
        state.data = data;
      });
    },
  })),
);

export type UseHomeZustandType = ReturnType<typeof useHomeZustand>;
