import { useCallback, useEffect } from 'react';
import { HttpRequest, HttpRequestType } from '../../https/export';
import { SetterKey, ZustandFnc } from '../../zustand/export';
import { zustandFnc } from '../../zustand/function/Function';

export type Payload<R extends keyof HttpRequestType> =
  HttpRequestType[R]['body'];

export const loadDataFromHttpsHookApi = <R extends keyof HttpRequestType>({
  endPoint,
  payload,
  zustandKey,
  setter = 'setData',
}: {
  endPoint: string;
  payload?: Payload<R>;
  zustandKey: keyof ZustandFnc;
  setter?: keyof SetterKey | 'setData';
}) => {
  /**
   * Fetching data from the server caching function to uneven callback
   */
  const apiCalling = useCallback(
    async (payload?: Payload<R>) => {
      const data = await HttpRequest.clientGetRequest<R>({
        endPoint,
        payload,
      });
      if (data.data) {
        zustandFnc[zustandKey].getState()?.[setter](data?.data);
      }
    },
    [payload, endPoint],
  );

  useEffect(() => {
    apiCalling(payload);
    return () => {
      // zustandFnc[zustandKey].getState()?.setData(initial.HomeInitialState);
    };
  }, []);

  return apiCalling;
};
