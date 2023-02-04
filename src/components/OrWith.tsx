import { StyleSheet, Text, View } from 'react-native'
import React, { FC, memo } from 'react'
import { F40018 } from '../styling/FontStyle'
import { Colors } from '../constant/Colors'

const OrWith: FC = memo(() => {
    return (
        <View style={styles.main}>
            <View style={styles.line} />
            <Text style={F40018.main}>{"Or With"}</Text>
            <View style={styles.line} />
        </View>
    )
})
export { OrWith }


const styles = StyleSheet.create({
    main:{ marginHorizontal: 35, marginTop: 32, flex: 1, justifyContent: "space-between", flexDirection: "row" },
    line: {
        height: 1,
        width: "37%",
        backgroundColor: Colors.borderColor,
        marginTop: 4,
        alignSelf: "center"
    }
})