import { useCallback, useEffect } from 'react';
import { HttpRequest, HttpRequestType, Payload } from '../../https/export';
import { SetterKey, ZustandFnc } from '../../zustand/export';
import { zustandFnc } from '../../zustand/function/Function';

export const loadDataFromHttpsHookApi = <R extends keyof HttpRequestType>({
  endPoint,
  payload,
  zustandKey,
  setter = 'setData',
  delay = 0,
}: {
  endPoint: string;
  payload?: Payload<R>;
  zustandKey: keyof ZustandFnc;
  setter?: keyof SetterKey | 'setData';
  delay?: number;
}) => {
  /**
   * Fetching data from the server caching function to uneven callback
   */
  const apiCalling = useCallback(
    async (payload?: Payload<R>) => {
      try {
        const data = await HttpRequest.clientGetRequest<R>({
          endPoint,
          payload,
        });
        if (data?.data) {
          zustandFnc[zustandKey].getState()?.[setter]?.(data?.data, payload);
        }
      } catch (error) {
        console.log('error', error);
      }
    },
    [payload, endPoint],
  );

  useEffect(() => {
    setTimeout(() => {
      apiCalling(payload);
    }, delay);
    return () => {
      // zustandFnc[zustandKey].getState()?.setData(initial.HomeInitialState);
    };
  }, []);

  return apiCalling;
};
