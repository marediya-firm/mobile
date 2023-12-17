import { showMessage } from "react-native-flash-message";
import { fontWeight } from "../utils";
import { strings } from "../constant";

// An account with Email johndoe@email.com already exists.
export const firebaseErrorMessage = (message: string) => {
    const { EmailAlreadyUser, Error }: string | object | any = strings?.FirebaseErrorMessage
    switch (message) {
        case EmailAlreadyUser: return FlashMessage(false, Error, EmailAlreadyUser?.slice(5).charAt(0).toUpperCase() + EmailAlreadyUser.slice(6))
    }
}


export const FlashMessage = (...payload: Array<string | any | boolean>) => {
    if (payload[0]) {
        showMessage({
            message: "Invalid filed",
            description: payload[1],
            type: "danger",
            animated: true,
            textStyle: { fontWeight: fontWeight.fontWeight500 },
            titleStyle: { fontWeight: fontWeight.fontWeight500 },
        })
    } else {
        showMessage({
            message: payload[1],
            description: payload[2],
            type: "danger",
            animated: true
        })
    }
}