import { ActivityIndicator, StyleProp, StyleSheet, Text, View } from 'react-native'
import React from 'react'
interface load {
    size: number | undefined | string | any;
    color?: StyleProp<View | ActivityIndicator> | undefined | string
}
export const LoadingIndicator = (props: load) => {
    const { size, color } = props
    return (
        <View>
            <ActivityIndicator size={size} color={color} />
        </View>
    )
}

const styles = StyleSheet.create({})