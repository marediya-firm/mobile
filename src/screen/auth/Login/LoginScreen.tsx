import {Pressable, View} from 'react-native';
import React from 'react';
import {CustomText, CustomView} from '../../../components/CoreComponent';
import {AppLogo, Google} from '../../../assets/icon';
import {AppStyle} from './styles';
import {variant} from '../../../utils';
import {ConstantString} from '../../../constant';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {UserInput, loginInput} from '../export';
import {AuthFooter, LoadingIndicator} from '../../../components/export';
import type {LoginScreenProps} from './interface/export';
import {routePath} from '../../../routes/export';
import {Freeze} from 'react-freeze';
import {useIsFocused} from '@react-navigation/native';
import {loginApiController} from './export';

const LoginScreen = (props: LoginScreenProps) => {
  const getAppString = ConstantString('strings');
  const styles = AppStyle();
  const focus = useIsFocused();

  return (
    <Freeze freeze={!focus} placeholder={<LoadingIndicator />}>
      <CustomView>
        <View style={styles.logo}>
          <AppLogo />
          <CustomText text={getAppString.LAVUs} variant={variant.F50036} />
          <CustomText text={getAppString.Restaurant} variant={variant.F30012} />
        </View>
        <View style={styles.restaurant}>
          <CustomText
            text={getAppString.Restaurant}
            variant={variant.F50036}
            extraStyle={styles.restaurantText}
          />
          <KeyboardAwareScrollView>
            <View style={styles.inputWrapper}>
              <View style={styles.inputContainer}>
                <UserInput key={'UserInputLogin'} renderInput={loginInput} />
                <CustomText
                  text={getAppString.ForgotPassword}
                  variant={variant.F30012}
                  extraStyle={styles.forgotPasswordText}
                />
                <Pressable
                  style={styles.continueWithGoogleLeftAl1}
                  onPress={loginApiController}>
                  <Google />
                  <CustomText
                    text={getAppString.Google}
                    variant={variant.F30014}
                    extraStyle={styles.googleText}
                  />
                </Pressable>
                <Pressable style={[styles.button]}>
                  <CustomText
                    text={getAppString.CreateAccount}
                    variant={variant.F30014}
                    extraStyle={styles.createAnAccount1}
                  />
                </Pressable>
                <View style={styles.margin}>
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
