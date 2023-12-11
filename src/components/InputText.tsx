import React from 'react'
import { StyleProp, StyleSheet, Text, TextInput, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import { Colors } from '../constant/Colors'
import { HideEyeIcon, ShowEyeIcon } from '../assets/icon'

interface InputText {
    value: string | undefined,
    placeholder: string,
    onChangeText: (value: any) => {} | any | void,
    styles?: StyleProp<TextStyle>,
    wrapperStyle?: StyleProp<ViewStyle>
    suggestion?: undefined | string;
    secureTextEntry?: boolean;
    showEyeIcon?: boolean;
    onPress?: () => null | undefined | void | any
}

export const InputText = (props: InputText) => {
    const { value, placeholder, onChangeText, styles, wrapperStyle, suggestion, secureTextEntry, showEyeIcon, onPress } = props
    return (
        <View style={[innerStyles.innerWrapper, wrapperStyle]}>
            {suggestion && <View style={innerStyles.suggestion}>
                <Text>
                    {suggestion}
                </Text>
            </View>}
            <TextInput
                placeholderTextColor={Colors.placeHolderBlack}
                value={value}
                secureTextEntry={secureTextEntry}
                style={[innerStyles.inputWrapper, styles]}
                placeholder={placeholder}
                onChangeText={onChangeText}
            />
            {showEyeIcon &&
                <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={innerStyles.eyeIcon}>
                    {!secureTextEntry ? <ShowEyeIcon /> : <HideEyeIcon />}
                </TouchableOpacity >
            }
        </View>
    )
}

const innerStyles = StyleSheet.create({
    innerWrapper: { marginTop: 28 },
    suggestion: { marginHorizontal: 39, paddingBottom: 5, height: 22 },
    inputWrapper: {
        height: 48,
        color: Colors.placeHolderBlack,
        fontWeight: "400",
        fontSize: 16,
        paddingHorizontal: 11,
        paddingRight: 40,
        marginHorizontal: 39,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: Colors.borderColor
    },
    eyeIcon: { position: "absolute", right: 52, top: 37 }
})