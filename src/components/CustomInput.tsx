import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useMemo, useState} from 'react';
import {CustomInputProps} from './export';
import {Colors} from '../constant';
import {fonts} from '../assets/fonts';

export const CustomInput = (props: CustomInputProps) => {
  const [onChangeText, setOnChangeText] = useState<string>(props.value);
  const styles = useMemo(() => appStyles, []);

  const changeHandler = (inValue: string) => {
    props.onChangeText(inValue);
    setOnChangeText(inValue);
  };

  return (
    <View style={styles.fullName}>
      <Text style={styles.inputTypo}>{props?.header}</Text>
      <TextInput
        value={onChangeText}
        placeholder={props?.placeHolder}
        onChangeText={changeHandler}
        secureTextEntry={props?.secureTextEntry}
        style={styles.inputText}
        placeholderTextColor={styles.inputText.color}
      />
    </View>
  );
};

const appStyles = StyleSheet.create({
  inputText: {color: Colors.offWhite, fontWeight: '400'},
  fullName: {
    borderRadius: 7,
    backgroundColor: '#fff',
    // shadowRadius: 2.06,
    elevation: 3,
    height: 70,
    shadowColor: Colors.semiBlue,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowRadius: 2.06,
    shadowOpacity: 0.5,
    padding: 7,
    paddingLeft: 15,
    marginVertical: 15,
  },
  inputTypo: {
    // fontFamily: fonts.robotoRegular,
    fontSize: 15,
    fontWeight: '400',
    color: Colors.placeHolderBlack,
  },
});
