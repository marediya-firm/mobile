import { StyleProp, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../constant/Colors';
import { F60016 } from '../styling/FontStyle';
import { FaceBook } from '../assets/icon/FaceBook';
import { styles } from '../screen/auth/Login/styles';

interface button {
    wrapperStyle?: StyleProp<TouchableOpacity | View | any>;
    title: string;
    buttonStyle?: StyleProp<TouchableOpacity | any>
    Icon?: undefined | any;
    onPress?: () => null | void;
    textStyle?: StyleProp<Text | any>;
    isShowIcon?: boolean
}

export const CommonButton = (props: button) => {
    const { wrapperStyle, title, buttonStyle, Icon, onPress, textStyle, isShowIcon } = props
    return (
        <View style={[wrapperStyle]}>
            <TouchableOpacity onPress={onPress} style={[innerStyle.innerButton,buttonStyle]}>
                <View style={innerStyle.icon}>
                    <FaceBook />
                </View>
                <Text style={[F60016.main, textStyle]}>
                    {title}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const innerStyle = StyleSheet.create({
    innerButton: {
        height: 48,
        marginHorizontal: 39,
        backgroundColor: Colors.blue,
        alignItems: "center",
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "center"
    },
    icon:{
        position:"absolute",
        left:9,
    }
})