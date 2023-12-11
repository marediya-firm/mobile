import React, {FC, memo} from 'react';
import {CustomInput} from '../../../components/import';
import {Pressable, Text, View} from 'react-native';
import {MemoStyle} from '../CreateAccount';
import {createAccountInput} from '../../../data/import';

export const UserInput: FC = memo(
  () => {
    const styles = MemoStyle();
    return (
      <View style={styles.inputContainer}>
        {createAccountInput.map(value => {
          return <CustomInput key={value.header} {...value} />;
        })}
        <Pressable
          style={[styles.button]}
          onPress={() => {}}>
          {/* <View style={[styles.createAnAccountWrapper, styles.buttonFlexBox]}> */}
            <Text style={styles.createAnAccount1}>Create an account</Text>
          {/* </View> */}
        </Pressable>
      </View>
    );
  },
  (): boolean => false,
);
