import { create } from 'zustand';
import {
  HomeSoteZustand,
  HttpPunchDetailResponse,
  IntialState,
} from '../export';

export const useGlobalLoad = create<HomeSoteZustand>(set => ({
  data: IntialState.HomeIntialState,
  setData: (data: HttpPunchDetailResponse) =>
    set(state => ({ ...state, data })),
}));

export type useGlobalLoadType = ReturnType<typeof useGlobalLoad>;
