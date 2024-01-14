import React from 'react';
import {Pressable, SafeAreaView, View} from 'react-native';
import {MemoStyle} from './styles';
import {Freeze} from 'react-freeze';
import {useIsFocused} from '@react-navigation/native';
import {ConstantString} from '../../../constant';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {apiController, CreateAccountProps, UserInput} from '../export';
import {
  AuthFooter,
  CustomText,
  LoadingIndicator,
} from '../../../components/export';
import {routePath} from '../../../routes/export';
import {variant} from '../../../utils';

const CreateAccount = (props: CreateAccountProps) => {
  // Get common string memories
  const getAppString = ConstantString('strings');
  // Get CreateAccount style with memories
  const styles = MemoStyle();

  const focus = useIsFocused();

  return (
    <Freeze freeze={!focus} placeholder={<LoadingIndicator />}>
      <React.Fragment>
        <SafeAreaView style={styles.safeArea} />
        <KeyboardAwareScrollView contentContainerStyle={styles.flexGrow}>
          <View style={styles.header}>
            <CustomText text={getAppString.SignUp} variant={variant.F50036} />
          </View>
          <View style={styles.inputWrapper}>
            <View style={styles.inputContainer}>
              <UserInput key={'UserInput'} />
              <Pressable onPress={apiController} style={[styles.button]}>
                <CustomText
                  text={getAppString.CreateAccount}
                  variant={variant.F30014}
                  extraStyle={styles.createAnAccount1}
                />
              </Pressable>
            </View>
            <AuthFooter
              title={String(getAppString.AlreadyAccount)}
              onPress={() => props.navigation.navigate(routePath.LoginScreen)}
            />
          </View>
        </KeyboardAwareScrollView>
      </React.Fragment>
    </Freeze>
  );
};

export default CreateAccount;
