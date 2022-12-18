import React, { Children, createContext, useContext, useReducer } from "react";
import { type } from "../constant/types";
import { InputReducer } from "./InputFnc";


export const GetInputContext = createContext()

export const CommonContext = ({ children }) => {
    let { userInput, dispatch } = InputReducer();
    return (
        <GetInputContext.Provider value={{
            userInput,
            dispatch
        }}>
            {children}
        </GetInputContext.Provider>
    )
}

