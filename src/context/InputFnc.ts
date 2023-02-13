import { useReducer } from "react"
import { type } from "../constant/types"

interface inputFiled {
    firsName: string | number | any;
    email: string | number | any;
    password: string | number | any;
    phoneNumber: string | number | any;
    secureTextEntry: boolean;
}

export const InputReducer = () => {
    let initialState: inputFiled = {
        firsName: "mmalmsa",
        email: "1234@gmail.com",
        password: "Test@123",
        phoneNumber: "12121212121212",
        secureTextEntry: false
    }

    const reducer = (state: any, action: { type: string; payload: any; }) => {
        switch (action.type) {
            case type.FIRST_NAME: return {
                ...state, firsName: action.payload
            }
            case type.EMAIL: return {
                ...state, email: action.payload
            }
            case type.PASSWORD: return {
                ...state, password: action.payload
            }
            case type.PHONE_NUMBER: return {
                ...state, phoneNumber: action.payload
            }
            case type.SECURE_TEXTENTRY: return {
                ...state, secureTextEntry: !action.payload
            }
            default: return state
        }
    }
    const [userInput, dispatch] = useReducer(reducer, initialState)

    return { userInput, dispatch }
}