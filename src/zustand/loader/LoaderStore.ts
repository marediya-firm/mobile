import {create} from 'zustand';
import {GlobalLoader} from '../interface/LoaderInterface';

export const useGlobalLoad = create<GlobalLoader>(set => ({
  loading: false,
  handleLoad: () => set(state => ({loading: !state.loading})),
}));

export type useGlobalLoadType = ReturnType<typeof useGlobalLoad>;
