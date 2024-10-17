import { HttpPunchDetailResponse } from '../../https/export';

export type GlobalLoader = {
  loading: boolean;
  handleLoad: () => void;
};

export type HomeSoteZustand = {
  data: HttpPunchDetailResponse;
  setData: (data: HttpPunchDetailResponse) => void;
};
