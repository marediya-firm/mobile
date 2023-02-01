import React, { FC } from 'react'
import { StyleProp, StyleSheet, Text, TextInput, View } from 'react-native'
import { Colors } from '../constant/Colors'

interface InputText {
    value: string | number,
    placeholder: string,
    onChangeText: (value: any) => {} | any | void,
    styles?: any,
    wrapperStyle?: StyleProp<View | any>
}

export const InputText = (props: InputText) => {
    const { value, placeholder, onChangeText, styles, wrapperStyle } = props
    return (
        <View style={[innerStyles.innerWrapper, wrapperStyle]}>
            <TextInput
                placeholderTextColor={Colors.placeHolderBlack}
                value={value}
                style={[innerStyles.inputWrapper, styles]}
                placeholder={placeholder}
                onChangeText={onChangeText}
            />
        </View>
    )
}

const innerStyles = StyleSheet.create({
    innerWrapper: { marginTop: 28 },
    inputWrapper: {
        height: 48,
        color: Colors.placeHolderBlack,
        fontWeight: "400",
        fontSize: 16,
        paddingHorizontal: 11,
        marginHorizontal: 39,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.borderColor
    },
})