import { create } from 'zustand';
import { HttpPunchDetailResponse, initial } from '../export';
import { immer } from 'zustand/middleware/immer';

// type OmitFunctions<T> = {
//   [K in keyof T as T[K] extends (...args: never) => never ? never : K]: T[K];
// };

export type HomeStoreZustand = {
  data: HttpPunchDetailResponse;
};

export type HomeStoreSetter = {
  setData: (data: HttpPunchDetailResponse) => void;
};

export type SetState = (fnc: (state: HomeStoreZustand) => void) => void;

export const useGlobalLoad = create<HomeStoreZustand & HomeStoreSetter>()(
  immer<HomeStoreZustand & HomeStoreSetter>((set: SetState) => ({
    data: initial.HomeInitialState,
    setData: (data: HttpPunchDetailResponse) => {
      set(state => {
        state.data = data;
      });
    },
  })),
);

export type useGlobalLoadType = ReturnType<typeof useGlobalLoad>;
