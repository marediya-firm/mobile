import { useReducer } from 'react';
import { type } from '../constant/types';

interface inputFiled {
  firsName: string | number;
  email: string | number;
  password: string | number;
  phoneNumber: string | number;
  secureTextEntry: boolean;
}

export const InputReducer = () => {
  const initialState: inputFiled = {
    firsName: 'mmalmsa',
    email: '1234@gmail.com',
    password: 'Test@123',
    phoneNumber: '12121212121212',
    secureTextEntry: false,
  };

  const reducer = (
    state: inputFiled,
    action: { type: string; payload: never },
  ) => {
    switch (action.type) {
      case type.FIRST_NAME:
        return {
          ...state,
          firsName: action.payload,
        };
      case type.EMAIL:
        return {
          ...state,
          email: action.payload,
        };
      case type.PASSWORD:
        return {
          ...state,
          password: action.payload,
        };
      case type.PHONE_NUMBER:
        return {
          ...state,
          phoneNumber: action.payload,
        };
      case type.SECURE_TEXTENTRY:
        return {
          ...state,
          secureTextEntry: !action.payload,
        };
      default:
        return state;
    }
  };
  const [userInput, dispatch] = useReducer(reducer, initialState);

  return { userInput, dispatch };
};
