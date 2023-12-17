import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useMemo, useState} from 'react';
import {CustomInputProps} from './export';
import {Colors} from '../constant';
import {fonts} from '../assets/fonts';

export const CustomInput = (props: CustomInputProps) => {
  const [onChangeText, setOnChangeText] = useState<boolean>(false);
  const styles = useMemo(() => appStyles, []);
  
  const changeHandler = (value: string) => {
    props.onChangeText(value);
    setOnChangeText(!onChangeText);
  };

  return (
    <View style={styles.fullName}>
      <Text style={styles.inputTypo}>{props.header}</Text>
      <TextInput
        value={props.value}
        placeholder={props.placeHolder}
        onChangeText={changeHandler}
        secureTextEntry={props.secureTextEntry}
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
    shadowRadius: 2.06,
    elevation: 3,
    shadowOpacity: 1,
    height: 70,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    padding: 7,
    paddingLeft: 15,
    marginVertical: 15,
  },
  inputTypo: {
    fontFamily: fonts.robotoRegular,
    fontSize: 15,
    fontWeight: '400',
    color: Colors.placeHolderBlack,
  },
});
