import { useCallback, useEffect } from 'react';
import { HttpRequest, HttpRequestType } from '../../https/export';
import { ZustandFnc } from '../../zustand/export';
import { zustandFnc } from '../../zustand/function/Function';

export const loadDataFromHttpsHookApi = <R extends keyof HttpRequestType>({
  endPoint,
  payload,
  zustandKey,
}: {
  endPoint: string;
  payload?: HttpRequestType[R]['body'];
  zustandKey: keyof ZustandFnc;
}) => {
  /**
   * Fetching data from the server caching function to uneven callback
   */
  const apiCalling = useCallback(async () => {
    return await HttpRequest.clientGetRequest<R>({
      endPoint,
      payload,
    });
  }, [payload, endPoint]);

  useEffect(() => {
    (async () => {
      const data = (await apiCalling()).data;
      if (data) {
        zustandFnc[zustandKey].getState()?.setData(data);
      }
    })();
    return () => {
      // zustandFnc[zustandKey].getState()?.setData(initial.HomeInitialState);
    };
  }, []);

  return apiCalling;
};
