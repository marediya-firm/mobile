import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

import firestore from '@react-native-firebase/firestore';

export const LoginScreen = () => {
    const [userInput, _UserInput] = useState({
        "email": '',
        "password": ""
    })
    const handleAuthAccount = async () => {
        try {
            const result = new Promise((resolve) => {
                resolve(auth().signInWithEmailAndPassword(userInput?.email, userInput?.password))
            })
            result.then((res: any) => {
                console.log("isRes", res);
            }).catch(async (err: any) => {
                await auth().createUserWithEmailAndPassword(userInput.email, userInput.password).then((res: any) => {
                    console.log("userInput ", res)
                }).catch((err: any) => {
                    console.log("err", err)
                })
            })
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ marginTop: 50 }}>
                <TextInput
                    onChangeText={(value: any) => _UserInput({ ...userInput, email: value })}
                    style={{ height: 50, marginHorizontal: 16, borderWidth: 1 }}>
                    <Text style={{ fontWeight: "700", fontSize: 20 }}>
                    </Text>
                </TextInput>
                <View style={{ marginTop: 15 }}>

                    <TextInput
                        onChangeText={(value: any) => _UserInput({ ...userInput, password: value })}
                        style={{ height: 50, marginHorizontal: 16, borderWidth: 1 }}>
                        <Text style={{ fontWeight: "700", fontSize: 20 }}>
                        </Text>
                    </TextInput>
                </View>
                <View style={{ marginTop: 15 }}>
                    <TouchableOpacity
                        onPress={handleAuthAccount}
                        style={{
                            width: "30%", height: 50, backgroundColor: "red",
                            alignSelf: "center", justifyContent: "center", alignItems: "center"
                        }}>
                        <Text style={{ color: "black" }}>
                            Submit
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({})