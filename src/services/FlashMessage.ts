import { showMessage } from "react-native-flash-message";
import { fontWeight } from "../styling";


export const FlashMessage = (...payload: Array<string | any | boolean>) => {
    if (payload[0]) {
        showMessage({
            message: "Invalid filed",
            description: payload[1],
            type: "danger",
            animated: true,
            textStyle:{fontWeight:fontWeight.fontWeight500},
            titleStyle:{fontWeight:fontWeight.fontWeight500},
        })
    } else {
        showMessage({
            message: "Invalid filed",
            description: payload[1],
            type: "danger",
            animated: true
        })
    }
}