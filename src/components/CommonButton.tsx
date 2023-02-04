import { StyleProp, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { Colors } from '../constant/Colors';
import { F60016 } from '../styling/FontStyle';
import { LoadingIndicator } from './LoadingIndicator';

interface button {
    wrapperStyle?: StyleProp<TouchableOpacity | View | any>;
    title: string;
    buttonStyle?: StyleProp<TouchableOpacity | any>
    Icon?: any | Component;
    onPress?: () => null | void|any;
    textStyle?: StyleProp<Text | any>;
    isShowIcon?: boolean,
    disabled?: boolean,
    loading?: boolean
}

export const CommonButton = (props: button) => {
    const { wrapperStyle, title, buttonStyle, Icon, onPress, textStyle, disabled = false, loading } = props
    return (
        <View style={[wrapperStyle]}>
            <TouchableOpacity disabled={disabled} activeOpacity={0.9} onPress={onPress} style={[innerStyle.innerButton, buttonStyle]}>
                {loading ? <LoadingIndicator color={Colors.borderColor} size={20} /> :
                    <>
                        <View style={innerStyle.icon}>
                            {Icon}
                        </View>
                        <Text style={[F60016.main, textStyle]}>
                            {title}
                        </Text>
                    </>
                }
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
    icon: {
        position: "absolute",
        left: 9,
    }
})