import { HttpPunchDetailResponse } from '../../https/export';
import { useHomeZustand } from '../home/HomeStore';

export type ZustandFnc = {
  useHomeZustand: typeof useHomeZustand;
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
