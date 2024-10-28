import { useGlobalLoad } from '../export';

export const appLoader = () => {
  useGlobalLoad?.getState()?.handleLoad();
};
