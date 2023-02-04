import React, {createContext, useState} from 'react';
import {InputReducer} from './InputFnc';
import {useNavigation} from '@react-navigation/native';

export const GlobalData: any = createContext({});
export const CommonContext = ({children}: any) => {
  let {userInput, dispatch} = InputReducer();
  const navigation = useNavigation();
  const [globalLoading, setGlobalLoading] = useState(false);
  const [useDetail, setUserDetail] = useState<object|any>(null);

  const rootStore = {
    navigation,
    userInput,
    dispatch,
    globalLoading,
    setGlobalLoading,
    useDetail,
    setUserDetail,
  };

  return (
    <GlobalData.Provider value={{rootStore}}>{children}</GlobalData.Provider>
  );
};
