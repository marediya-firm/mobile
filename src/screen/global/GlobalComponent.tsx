import React from 'react';
import FlashMessage from 'react-native-flash-message';
import AppLoader from '../../components/AppLoader';
import MainStack from '../../routes/MainStack';
import {
  QueryClient,
  QueryClientProvider,
  HydrationBoundary,
} from '@tanstack/react-query';
import {GetToken} from '../../hook/export';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {retry: 2, retryDelay: 1000},
  },
});
export const GlobalComponent = () => {
  const tokenValue: string = GetToken();
  return (
    <QueryClientProvider client={queryClient}>
      {tokenValue !== 'initial' && (
        <HydrationBoundary queryClient={queryClient} state={'me'}>
          <MainStack />
          <AppLoader />
          <FlashMessage position="top" animated={true} />
        </HydrationBoundary>
      )}
    </QueryClientProvider>
  );
};
