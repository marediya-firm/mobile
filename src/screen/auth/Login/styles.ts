import { StyleSheet } from "react-native";
import { Colors } from "../../../constant/Colors";
import { fontWeight, fontSize } from '../../../styling/index'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    headerContainer: {
        marginTop: "10%",
    },
    headerText: {
        color: Colors.darkBlack,
        fontWeight: fontWeight.fontWeight700,
    },
    headerTextToday: {
        color: Colors.grey,
        fontWeight: fontWeight.fontWeight600,
        // fontSize:
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
})

