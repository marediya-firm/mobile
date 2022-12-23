import React, { FC } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Colors } from '../constant/Colors'

interface InputText {
    value: string | number,
    placeholder: string,
    onChangeText: (value: any) => {} | any | void,
    styles?: any
}

export const InputText = (props: InputText) => {
    const { value, placeholder, onChangeText, styles } = props
    return (
        <View>
            <TextInput
                value={value}
                style={[innerStyles.inputWrapper, styles]}
                placeholder={placeholder}
                onChangeText={onChangeText}
            />
        </View>
    )
}

const innerStyles = StyleSheet.create({
    inputWrapper: {
        height: 48,
        marginHorizontal: 38,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.lightBlack
    },
})