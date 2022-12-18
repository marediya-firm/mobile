import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import auth from '@react-native-firebase/auth';
import {
  Localstorage_SetItem,
} from '../../../helper/LocalStorage.';
import { Localstorage_Key } from '../../../helper/LocalStorageKey';
import { InputText } from '../../../components/InputText';
import { styles } from './styles';
import { GetInputContext } from '../../../context/InputContext';
import { type } from '../../../constant/types';
import AuthHeader from '../../../components/AuthHeader';

const LoginScreen = () => {
  // const [userInput, _UserInput] = useState({
  //   email: '',
  //   password: '',
  // });

  const { userInput, dispatch }: object | any = useContext(GetInputContext)
  // console.log("userInput", userInput);

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
        <Text style={styles.headerText}>
          Create an account
        </Text>
        <Text style={styles.headerTextToday}>
          Connect with your friends today!
        </Text>
      </View>
    )
  }, [])

  return (
    <View style={styles.container}>
      <View>
        {Header}
      </View>
      <InputText value={userInput?.email} placeholder={"ala"} onChangeText={(value) => dispatch({ type: type.EMAIL, payload: value })} styles={undefined} />
      <InputText value={userInput?.password} placeholder={"ala"} onChangeText={(value) => dispatch({ type: type.EMAIL, payload: value })} styles={undefined} />
      <InputText value={userInput?.firsName} placeholder={"ala"} onChangeText={(value) => dispatch({ type: type.EMAIL, payload: value })} styles={undefined} />
      <InputText value={userInput?.password} placeholder={"ala"} onChangeText={(value) => dispatch({ type: type.EMAIL, payload: value })} styles={undefined} />
    </View>
  );
};

export default LoginScreen

