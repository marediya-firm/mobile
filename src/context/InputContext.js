import React, { Children, createContext, useContext, useReducer } from "react";
import { type } from "../constant/types";
import { InputReducer } from "./InputFnc";


export const GetInputContext = createContext()

export const CommonContext = ({ children }) => {
    let { userInput, dispatch } = InputReducer();
    const store = {
        userInput,
        dispatch
    }
    return (
        <GetInputContext.Provider value={{ store }}>
            {children}
        </GetInputContext.Provider>
    )
}

