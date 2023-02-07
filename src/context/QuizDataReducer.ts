import { useReducer } from 'react';
import { type } from '../constant';
interface question {
    qLoading: boolean;
    questionData: Array<object | any> | [any];
    questionIndex: number;
    questionError: string;
    isSumitAnswer:boolean
}

export const QuizDataReducer = () => {
    const initialState: question = {
        qLoading: false,
        questionData: [],
        questionIndex: 0,
        questionError: "",
        isSumitAnswer:false
    };

    const reducer = (state: any, action: { payload: any; types: string }) => {
        const { payload, types }: any = action;
        switch (types) {
            case type.QUESTION_LOADING:
                return { ...state, qLoading: true };
            case type.QUESTION_DATA:
                return { ...state, questionData: payload,  qLoading: false };
            case type.INCREASE_INDEX:
                return { ...state, questionIndex: payload };
                case type.ON_SUBMIT_ANSWER:
                return { ...state,questionData: payload.questionData, isSumitAnswer: payload.submit };
                case type.ON_NEXT:
                    return { ...state, isSumitAnswer: false };
            case type.QUESTION_ERROR:
                return { ...initialState, questionError: payload };
        }
    };

    const [question, dispatchQuestion] = useReducer(reducer, initialState);
    return { question, dispatchQuestion }
};
