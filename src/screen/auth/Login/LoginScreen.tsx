import {Alert, SafeAreaView, Text, View} from 'react-native';
import React, {useContext, useMemo} from 'react';
import auth from '@react-native-firebase/auth';
import {Localstorage_SetItem} from '../../../helper/LocalStorage.';
import {Localstorage_Key} from '../../../helper/LocalStorageKey';
import {marginTop, styles} from './styles';
import {GlobalData} from '../../../context/CommonContext';
import {F50015, F70024} from '../../../styling/FontStyle';
import {AuthFooter, CommonButton, InputText, OrWith} from '../../../components';
import {FaceBook, Google} from '../../../assets/icon/index';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {navigationRoute} from '../../../services';
import {ROUTES} from '../../../routes/RoutesName/RoutesName';
import {strings, type} from '../../../constant';

const LoginScreen = () => {
  const {
    rootStore: {
      navigation,
      userInput,
      dispatch,
      setGlobalLoading,
    },
  }: object | any = useContext(GlobalData);

  const {
    Email,
    Password,
    EmailPlaceHolder,
    PasswordPlaceHolder,
    ForgotPassword,
    Donthaveaccount,
    Facebook,
    SignUp,
    SignIn,
    Welcome,
    GoogleG,
    always,
  }: string | any = useMemo(() => strings, []);
  const cacheStyle = useMemo(() => styles, []);

  const handleAuthAccount = async () => {
    try {
      setGlobalLoading(true);
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
        .catch((err) => {console.log("eroor",err);
        })
        .finally(() => setGlobalLoading(false));
    } catch (error) {
      setGlobalLoading(false);
      console.log(error);
    }
  };

  const Header = useMemo(() => {
    return (
      <View style={cacheStyle.headerContainer}>
        <Text style={F70024.main}>{Welcome}</Text>
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
          <View style={marginTop(12)}>
            <InputText
              suggestion={Email}
              wrapperStyle={marginTop(23)}
              value={userInput?.email}
              placeholder={EmailPlaceHolder}
              onChangeText={value =>
                dispatch({type: type.EMAIL, payload: value})
              }
            />
            <InputText
              suggestion={Password}
              value={userInput?.phoneNumber}
              placeholder={PasswordPlaceHolder}
              onChangeText={value =>
                dispatch({type: type.PASSWORD, payload: value})
              }
              secureTextEntry={userInput?.secureTextEntry}
              showEyeIcon={true}
              onPress={() =>
                dispatch({
                  type: type.SECURE_TEXTENTRY,
                  payload: userInput?.secureTextEntry,
                })
              }
            />
            <View style={{...styles.forgotPass, ...marginTop(24)}}>
              <Text style={F50015.main}>{ForgotPassword}</Text>
            </View>
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
              mainTitle={Donthaveaccount}
              onPress={() => navigationRoute(navigation, ROUTES.CreateAccount)}
              title={SignUp}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
      <SafeAreaView style={cacheStyle.safeArea} />
    </>
  );
};

export default LoginScreen;
