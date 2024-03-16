import {useReducer} from 'react';
import {type} from '../constant';
interface question {
  qLoading: boolean;
  questionData: Array<object | any> | [any];
  questionIndex: number;
  questionError: string;
  confirmSubmit: boolean;
  finalSubmitAnswer: [] | Array<object> | any;
  fillQuestion: [] | Array<object> | any;
}

export const QuizDataReducer = () => {
  const initialState: question = {
    qLoading: false,
    questionData: [],
    finalSubmitAnswer: [],
    fillQuestion: [],
    questionIndex: 0,
    questionError: '',
    confirmSubmit: false,
  };

  const reducer = (state: any, action: {payload: any; types: string}) => {
    const {payload, types}: any = action;
    switch (types) {
      case type.QUESTION_LOADING:
        return {...state, qLoading: true};
      case type.QUESTION_DATA:
        let submitedAnswer = payload.qData?.map((res: any) => {
          return {isSubmitedAnswer: false};
        });
        return {
          ...state,
          questionData: payload.qData,
          qLoading: false,
          fillQuestion: submitedAnswer,
        };
      case type.ON_SELECTOPTION:
        return {...state, questionData: payload};
      case type.INCREASE_INDEX:
        return {
          ...state,
          questionIndex: payload.index,
          questionData: payload.finalAnswer,
          fillQuestion: payload.submited,
          confirmSubmit: payload.confirmSubmit,
        };
      case type.JUMP_INDEX:
        return {...state, questionIndex: payload};
      case type.ON_SUBMIT_ANSWER:
        return {
          ...state,
          questionData: payload.questionData,
          confirmSubmit: payload.submit,
        };
      case type.ON_NEXT:
        return {...state, confirmSubmit: false};
      case type.FINAL_SUBMIT_ANSWER:
        return {...state, finalSubmitAnswer: payload};
      case type.QUESTION_ERROR:
        return {...initialState, questionError: payload};
      case type.RESET_QUIZ: {
        return {...initialState};
      }
    }
  };

  const [question, dispatchQuestion] = useReducer(reducer, initialState);
  return {question, dispatchQuestion};
};
