import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {
  Localstorage_GetItem,
  Localstorage_SetItem,
} from '../../helper/LocalStorage.';
import {Localstorage_Key} from '../../helper/LocalStorageKey';
import {Images} from '../../assets/image';

export const LoginScreen = () => {
  const [userInput, _UserInput] = useState({
    email: '',
    password: '',
  });

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
          console.log(params);
          await Localstorage_SetItem(Localstorage_Key.USER_DETAIL, params);
        })
        .catch(() => {});
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{marginTop: 50}}>
        <TextInput
          onChangeText={(value: any) =>
            _UserInput({...userInput, email: value})
          }
          style={{height: 50, marginHorizontal: 16, borderWidth: 1}}>
          <Text style={{fontWeight: '700', fontSize: 20}} />
        </TextInput>
        <View style={{marginTop: 15}}>
          <TextInput
            onChangeText={(value: any) =>
              _UserInput({...userInput, password: value})
            }
            style={{height: 50, marginHorizontal: 16, borderWidth: 1}}>
            <Text style={{fontWeight: '700', fontSize: 20}} />
          </TextInput>
        </View>
        <View style={{marginTop: 15}}>
          <TouchableOpacity
            onPress={handleAuthAccount}
            style={{
              width: '30%',
              height: 50,
              backgroundColor: 'red',
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'black'}}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{position: 'absolute', bottom: 2, left: 2}}>
        <Image source={Images.Login} style={{height: 0, width: 400}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
