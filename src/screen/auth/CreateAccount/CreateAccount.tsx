import {SafeAreaView, Text, View} from 'react-native';
import React, {useContext, useMemo} from 'react';
import auth from '@react-native-firebase/auth';
import {Localstorage_SetItem} from '../../../helper/LocalStorage.';
import {Localstorage_Key} from '../../../helper/LocalStorageKey';
import {marginTop, styles} from './styles';
import {GlobalData} from '../../../context/CommonContext';
import {type} from '../../../constant/types';
import {F60014, F70024} from '../../../styling/FontStyle';
import {AuthFooter, CommonButton, InputText, OrWith} from '../../../components';
import {FaceBook, Google} from '../../../assets/icon/index';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  FlashMessage,
  createAccountQuery,
  navigationRoute,
} from '../../../services';
import {ROUTES} from '../../../routes/RoutesName/RoutesName';
import {strings} from '../../../constant';
import {emailRegex} from '../regex/regex';

export const CreateAccount = () => {
  /**
   * root store from context value
   */
  const {
    rootStore: {navigation, userInput, dispatch, setGlobalLoading},
  }: object | any = useContext(GlobalData);

  const cacheStyle = useMemo(() => styles, []);
  /**
   * string filer return from cache value
   */
  const {
    UserNamePlacholder,
    PhoneNumberPlacholder,
    Account,
    Login,
    EmailPlaceHolder,
    PasswordPlaceHolder,
    Facebook,
    SignIn,
    GoogleG,
    always,
    CreateAccount,
    ConnectFriends,
    validationMessageRequest,
  }: string | any = useMemo(() => strings, []);

  /**
   * Handle from create account Firebase request
   */
  const handleAuthAccount = async () => {
    try {
      const {email, password, firsName, phoneNumber} = userInput;
      let validForm = false;
      if (firsName.length <= 0) {
        FlashMessage(true, validationMessageRequest(`"UserName"`));
        validForm = true;
      } else if (!emailRegex.test(email)) {
        validForm = true;
        FlashMessage(true, validationMessageRequest(`"Email"`));
      } else if (phoneNumber.length <= 0) {
        validForm = true;
        FlashMessage(true, validationMessageRequest(`"Phone Number"`));
      } else if (password.length <= 0 || password.length <= 7) {
        validForm = true;
        FlashMessage(true, validationMessageRequest(`"Password"`));
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
            params?.userEmail,
            phoneNumber,
            params?.image,
            params?.userID,
            params?.createUserTime,
          );
          await Localstorage_SetItem(Localstorage_Key.USER_DETAIL, params);
        })
        .catch(err => {
          console.log('err', err);
          setGlobalLoading(false);
        })
        .finally(() => setGlobalLoading(false));
    } catch (error) {
      setGlobalLoading(false);
      console.log(error);
    }
  };

  /**
   * header from cache value
   */
  const Header = useMemo(() => {
    return (
      <View style={cacheStyle.headerContainer}>
        <Text style={F70024.main}>{CreateAccount}</Text>
        <Text style={F60014.main}>{ConnectFriends}</Text>
      </View>
    );
  }, []);

  return (
    <>
      <SafeAreaView style={cacheStyle.safeArea} />
      <View style={cacheStyle.container}>
        <View>{Header}</View>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps={always}
          contentContainerStyle={cacheStyle.mainComponent}>
          <View>
            <InputText
              value={userInput?.firsName}
              placeholder={UserNamePlacholder}
              onChangeText={value =>
                dispatch({type: type.FIRST_NAME, payload: value})
              }
            />
            <InputText
              value={userInput?.email}
              placeholder={EmailPlaceHolder}
              onChangeText={value =>
                dispatch({type: type.EMAIL, payload: value})
              }
            />
            <InputText
              value={userInput?.phoneNumber}
              placeholder={PhoneNumberPlacholder}
              onChangeText={value =>
                dispatch({type: type.PHONE_NUMBER, payload: value})
              }
            />
            <InputText
              value={userInput?.password}
              placeholder={PasswordPlaceHolder}
              onChangeText={value =>
                dispatch({type: type.PASSWORD, payload: value})
              }
            />
            <CommonButton
              wrapperStyle={marginTop(29)}
              onPress={() => handleAuthAccount()}
              title={SignIn}
            />
            <OrWith />
            <CommonButton
              wrapperStyle={marginTop(23)}
              onPress={() => {}}
              title={Facebook}
              buttonStyle={cacheStyle.button}
              Icon={<FaceBook />}
            />
            <CommonButton
              wrapperStyle={marginTop(28)}
              onPress={() => {}}
              title={GoogleG}
              textStyle={cacheStyle.googleText}
              buttonStyle={cacheStyle.googleButton}
              Icon={<Google />}
            />
            <AuthFooter
              mainTitle={Account}
              onPress={() => navigationRoute(navigation, ROUTES.LoginScreen)}
              title={Login}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
      <SafeAreaView style={cacheStyle.safeArea} />
    </>
  );
};
