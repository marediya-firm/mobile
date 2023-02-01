import { StyleSheet } from "react-native"
import { Colors } from "../constant/Colors"


export const fontWeight: any = {
    fontWeight700: "700",
    fontWeight600: "600"
}

export const fontSize = {
    fontSize24: 24,
    fontSize14: 14,
    fontSize16: 16,
}

export const F70024 = StyleSheet.create({
    main: {
        color: Colors.darkBlack,
        fontSize: fontSize.fontSize24,
        fontWeight: fontWeight.fontWeight700
    }
})

export const F60014 = StyleSheet.create({
    main: {
        color: Colors.grey,
        fontSize: fontSize.fontSize14,
        fontWeight: fontWeight.fontWeight600
    }
})

export const F60016 = StyleSheet.create({
    main: {
        color: Colors.white,
        fontSize: fontSize.fontSize16,
        fontWeight: fontWeight.fontWeight600
    },
    colorBlack:{
        color: Colors.white,
    }
})