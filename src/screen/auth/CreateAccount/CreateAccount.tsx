import {Pressable, SafeAreaView, Text, View} from 'react-native';
import {MemoStyle} from './styles';
import {ConstantString} from '../../../constant';
import {UserInput} from '../export';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import React from 'react';
import {AuthFooter} from '../../../components/import';
import {GetFontStyle} from '../../../utils';
import {Back} from '../../../assets/icon';
import {CreateAccountProps} from './export';
import { routePath } from '../../../routes/export';

const CreateAccount = (props: CreateAccountProps) => {
  // Get common string memories
  const getAppString = ConstantString('strings');
  // Get CreateAccount style with memories
  const styles = MemoStyle();
  // Get fonts style with memories
  const getFontStyle = GetFontStyle();

  return (
    <React.Fragment>
      <SafeAreaView style={styles.safeArea} />
      <KeyboardAwareScrollView contentContainerStyle={styles.flexGrow}>
        <View style={styles.back}>
          <Back />
        </View>
        <View style={styles.header}>
          <Text style={[getFontStyle.F50036, getFontStyle.textAlign]}>
            {String(getAppString.SignUp)}
          </Text>
        </View>
        <View style={styles.inputWrapper}>
          <View style={styles.inputContainer}>
            <UserInput key={'UserInput'} />
            <Pressable
              style={[styles.button]}
              onPress={() => {
                props.navigation.navigate(routePath.LoginScreen);
              }}>
              <Text style={styles.createAnAccount1}>
                {String(getAppString.CreateAccount)}
              </Text>
            </Pressable>
          </View>
          <AuthFooter title={String(getAppString.AlreadyAccount)} />
        </View>
      </KeyboardAwareScrollView>
    </React.Fragment>
  );
};

export default CreateAccount;
