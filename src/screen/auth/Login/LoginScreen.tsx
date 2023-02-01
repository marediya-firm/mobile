import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useCallback, useContext, useEffect, useMemo } from 'react';
import auth from '@react-native-firebase/auth';
import {
  Localstorage_SetItem,
} from '../../../helper/LocalStorage.';
import { Localstorage_Key } from '../../../helper/LocalStorageKey';
import { styles } from './styles';
import { GetInputContext } from '../../../context/InputContext';
import { type } from '../../../constant/types';
import { F60014, F70024 } from '../../../styling/FontStyle';
import { ScrollView } from 'react-native-gesture-handler';
import { CommonButton, InputText } from '../../../components';

const LoginScreen = () => {

  const { store: { userInput, dispatch } }: object | any = useContext(GetInputContext)

  const handleAuthAccount = async () => {
    try {
      auth()
        .signInWithEmailAndPassword(userInput?.email, userInput?.password)
        .then(async (res: any) => {
          let params = {
            userID: res?.user?._auth?._user?._user?.uid,
            userEmail: res?.user?._user?.email,
            createUserTime: res?.user?._user.metadata?.creationTime,
          };
          await Localstorage_SetItem(Localstorage_Key.USER_DETAIL, params);
        })
        .catch(() => { });
    } catch (error) {
      console.log(error);
    }
  };

  const Header = useMemo(() => {
    return (
      <View style={styles.headerContainer}>
        <Text style={F70024.main}>
          Create an account
        </Text>
        <Text style={F60014.main}>
          Connect with your friends today!
        </Text>
      </View>
    )
  }, [])

  return (
    <>
      <SafeAreaView style={styles.safeArea} />
      <View style={styles.container}>
        <View>
          {Header}
        </View>
        <ScrollView>
          <View style={styles.mainComponent}>
            <InputText value={userInput?.firsName} placeholder={"Enter Your Username"} onChangeText={(value) => dispatch({ type: type.FIRST_NAME, payload: value })} />
            <InputText value={userInput?.email} placeholder={"Enter Your Email"} onChangeText={(value) => dispatch({ type: type.EMAIL, payload: value })} />
            <InputText value={userInput?.password} placeholder={"Enter Your Phone Number"} onChangeText={(value) => dispatch({ type: type.PASSWORD, payload: value })} />
            <InputText value={userInput?.confirmPassword} placeholder={"Enter Your Password"} onChangeText={(value) => dispatch({ type: type.CONFIRM_PASSWORD, payload: value })} />
            <CommonButton wrapperStyle={{ marginTop: 29 }} onPress={() => { }} title={'Sign In'} />
            <CommonButton wrapperStyle={{ marginTop: 29 }} onPress={() => { }} title={'Signup with Facebook'} buttonStyle={styles.button} />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default LoginScreen

