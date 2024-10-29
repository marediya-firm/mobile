import React, { createContext, useState } from 'react';
import { InputReducer } from './InputFnc';
import { useNavigation } from '@react-navigation/native';
// import { QuizDataReducer } from './QuizDataReducer';

export const GlobalData = createContext({});
export const CommonContext = ({ children }: { children: React.ReactNode }) => {
  const { userInput, dispatch } = InputReducer();
  const QuizDataReducer = () => {
    return {
      question: {},
      dispatchQuestion: () => {
        ('');
      },
    };
  };
  const navigation = useNavigation();
  const [globalLoading, setGlobalLoading] = useState(false);
  const { question, dispatchQuestion } = QuizDataReducer();
  const [useDetail, setUserDetail] = useState<object>({});

  const rootStore = {
    navigation,
    userInput,
    dispatch,
    globalLoading,
    setGlobalLoading,
    useDetail,
    setUserDetail,
    question,
    dispatchQuestion,
  };

  return (
    <GlobalData.Provider value={{ rootStore }}>{children}</GlobalData.Provider>
  );
};
