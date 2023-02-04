import { StyleSheet } from "react-native"
import { Colors } from "../constant/Colors"


export const fontWeight: any = {
    fontWeight400: "400",
    fontWeight500: "500",
    fontWeight600: "600",
    fontWeight700: "700",
}

export const fontSize = {
    fontSize14: 14,
    fontSize15: 15,
    fontSize16: 16,
    fontSize18: 18,
    fontSize24: 24,

}

export const F40018 = StyleSheet.create({
    main: {
        fontSize: fontSize.fontSize16,
        fontWeight: fontWeight.fontWeight600,
        color: Colors.darkBlack,
        opacity: 0.8
    },
})

export const F50015 = StyleSheet.create({
    main: {
        fontSize: fontSize.fontSize15,
        fontWeight: fontWeight.fontWeight500,
        color: Colors.Orange
    },
})

export const F50016 = StyleSheet.create({
    main: {
        fontSize: fontSize.fontSize16,
        fontWeight: fontWeight.fontWeight500,
        color: Colors.darkBlack,
        opacity: 0.8
    },
    blueColor: {
        color: Colors.loginBlue,
        left: 4
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
    colorBlack: {
        color: Colors.white,
    }
})

export const F70024 = StyleSheet.create({
    main: {
        color: Colors.darkBlack,
        fontSize: fontSize.fontSize24,
        fontWeight: fontWeight.fontWeight700
    }
})


