import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {mainStyles} from '../screen/auth/createaccount/export';
import {CustomInputProps} from './import';
import {Colors} from '../constant';

export const CustomInput = (props: CustomInputProps) => {
  const [onChangeText, setOnChangeText] = useState<boolean>(false);

  const changeHandler = (value: string) => {
    props.onChangeText(value);
    setOnChangeText(!onChangeText);
  };

  return (
    <View style={mainStyles.fullName}>
      <Text style={mainStyles.inputTypo}>{props.header}</Text>
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

const styles = StyleSheet.create({
  inputText: {color: Colors.offWhite, fontWeight: '400'},
});
