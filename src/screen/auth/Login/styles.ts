import { Platform, StyleSheet } from "react-native";
import { Colors } from "../../../constant/Colors";
import { fontWeight, fontSize } from '../../../styling/index'

export const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: Colors.white
    },
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    mainComponent: {
        marginTop: 8
    },
    headerContainer: {
        marginTop: Platform.OS === "android" ? "10%" : 0,
        justifyContent: "center",
        alignItems: "center"
    },
    headerText: {
        color: Colors.darkBlack,
        fontWeight: fontWeight.fontWeight700,
    },
    headerTextToday: {
        color: Colors.grey,
        fontWeight: fontWeight.fontWeight600,
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    button: {
        backgroundColor: Colors.googleBlue,
        borderRadius: 10
    }
})

