import {Pressable, SafeAreaView, Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import {MemoStyle} from './styles';
import {createAccountQuery, firebaseErrorMessage} from '../../../services';
import {ConstantString} from '../../../constant';
import {emailRegex} from '../regex/regex';
import {UserInput} from '../import';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import React, {useState} from 'react';

export const CreateAccount = () => {
  const constantString = ConstantString();
  const styles = MemoStyle();

  const [loading, setGlobalLoading] = useState(false);
  const userInput = {email: '', password: '', firsName: '', phoneNumber: ''};

  /**
   * Handle from create account Firebase request
   */
  const handleAuthAccount = async () => {
    try {
      const {email, password, firsName, phoneNumber} = userInput;
      let validForm = false;
      if (firsName.length <= 0) {
        // FlashMessage(true, validationMessageRequest(`"UserName"`));
        validForm = true;
      } else if (!emailRegex.test(email)) {
        validForm = true;
        // FlashMessage(true, validationMessageRequest(`"Email"`));
      } else if (phoneNumber.length <= 0) {
        validForm = true;
        // FlashMessage(true, validationMessageRequest(`"Phone Number"`));
      } else if (password.length <= 0 || password.length <= 7) {
        validForm = true;
        // FlashMessage(true, validationMessageRequest(`"Password"`));
      }
      !validForm && setGlobalLoading(true);
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(async (res: any) => {
          let params = {
            userID: res?.user?._user?.uid,
            usersEmail: res?.user?._user?.email,
            createUserTime: res?.user?._user.metadata?.creationTime,
            name: res?.user?._user?.email?.split('@')[0],
            image: '',
            phoneNumber,
          };
          /** add user deatil in firebase */
          createAccountQuery(
            params?.name,
            params?.usersEmail,
            phoneNumber,
            params?.image,
            params?.userID,
            params?.createUserTime,
          );
          // await Localstorage_SetItem(Localstorage_Key.USER_DETAIL, params);
        })
        .catch(err => {
          firebaseErrorMessage(err.code);
          console.log('err', err.code);
          setGlobalLoading(false);
        })
        .finally(() => setGlobalLoading(false));
    } catch (error) {
      setGlobalLoading(false);
      console.log(error);
    }
  };

  return (
    <>
      <SafeAreaView style={styles.safeArea} />
      <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.header}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </View>
        <View style={styles.inputWrapper}>
          <UserInput key={'UserInput'} />
        </View>
      </KeyboardAwareScrollView>
    </>
  );
};
{
  /* <AuthFooter
  mainTitle={Account}
  onPress={() => navigationRoute(navigation, ROUTES.LoginScreen)}
  title={Login}
/> */
}
