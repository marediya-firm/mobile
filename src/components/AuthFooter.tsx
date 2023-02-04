import { StyleSheet, Text, View } from 'react-native'
import React, { FC, memo, useMemo } from 'react'
import { F50016 } from '../styling/FontStyle'

interface buttonPress {
    title: string;
    onPress?: () => null | undefined | void;
    mainTitle?: string
}
const AuthFooter: FC = memo((props: buttonPress | any) => {
    const { onPress, title, mainTitle } = props
    return (
        <View style={styles.main}>
            <Text style={[F50016.main]}>
                {mainTitle}
            </Text>
            <Text onPress={onPress} style={[F50016.main, F50016.blueColor]}>
                {title}
            </Text>
        </View>
    )
})

export { AuthFooter }

const styles = StyleSheet.create({
    main: { flex: 1, justifyContent: "center", marginTop: 33, flexDirection: "row" }
})