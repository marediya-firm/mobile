import { useReducer } from "react"
import { type } from "../constant/types"

export const InputReducer = () => {
    let initialState = {
        firsName: "",
        email: "",
        password: "",
        phoneNumber: "",
        confirmPassword: ""
    }
    console.log("reduceerCall");

    const reducer = (state, action) => {
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
            case type.CONFIRM_PASSWORD: return {
                ...state, confirmPassword: action.payload
            }
            default: return state
        }
    }
    const [userInput, dispatch] = useReducer(reducer, initialState)

    return { userInput, dispatch }
}