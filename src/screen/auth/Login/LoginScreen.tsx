import {Pressable, View} from 'react-native';
import React from 'react';
import {CustomText, CustomView} from '../../../components/CoreComponent';
import {AppLogo, Google} from '../../../assets/icon';
import {AppStyle} from './styles';
import {variant} from '../../../utils';
import {Colors, ConstantString} from '../../../constant';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {UserInput, loginInput} from '../export';
import {AuthFooter, LoadingIndicator} from '../../../components/export';
import type {LoginScreenProps} from './interface/export';
import {routePath} from '../../../routes/export';
import {Freeze} from 'react-freeze';
import {useIsFocused} from '@react-navigation/native';

const LoginScreen = (props: LoginScreenProps) => {
  const getAppString = ConstantString('strings');
  const styles = AppStyle();
  const focus = useIsFocused();
  // const getFontStyle = GetFontStyle();
  return (
    <Freeze freeze={!focus} placeholder={<LoadingIndicator />}>
      <CustomView>
        <View style={styles.logo}>
          <AppLogo />
          <CustomText text={getAppString.LAVUs} variant={variant.F50036} />
          <CustomText text={getAppString.Restaurant} variant={variant.F30012} />
        </View>
        <View
          style={{backgroundColor: 'white', flex: 1, borderTopLeftRadius: 60}}>
          <CustomText
            text={getAppString.Restaurant}
            variant={variant.F50036}
            extraStyle={{color: Colors.darkBlack, marginTop: 12}}
          />
          <KeyboardAwareScrollView>
            <View style={styles.inputWrapper}>
              <View style={styles.inputContainer}>
                <UserInput key={'UserInputLogin'} renderInput={loginInput} />
                <CustomText
                  text={getAppString.ForgotPassword}
                  variant={variant.F30012}
                  extraStyle={{alignSelf: 'flex-end', color: Colors.darkBlack}}
                />
                <Pressable
                  style={styles.continueWithGoogleLeftAl1}
                  onPress={() => {}}>
                  <Google />
                  <CustomText
                    text={getAppString.Google}
                    variant={variant.F30014}
                    extraStyle={{paddingLeft: 15, color: Colors.darkBlack}}
                  />
                </Pressable>
                <Pressable style={[styles.button]}>
                  <CustomText
                    text={getAppString.CreateAccount}
                    variant={variant.F30014}
                    extraStyle={styles.createAnAccount1}
                  />
                </Pressable>
                <View style={{marginTop: 24}}>
                  <AuthFooter
                    title={String(getAppString.NotHaveAccount)}
                    onPress={() =>
                      props.navigation.navigate(routePath.CreateAccount)
                    }
                  />
                </View>
              </View>
            </View>
          </KeyboardAwareScrollView>
        </View>
      </CustomView>
    </Freeze>
  );
};

export default LoginScreen;
