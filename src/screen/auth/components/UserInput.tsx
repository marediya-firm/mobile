import React, {FC, memo} from 'react';
import {CustomInput} from '../../../components/import';
import {Pressable, Text, View} from 'react-native';
import {MemoStyle} from '../createaccount/export';
import {createAccountInput} from '../../../data/import';

export const UserInput: FC = memo(
  () => {
    return (
      <React.Fragment>
        {createAccountInput.map(value => {
          return <CustomInput key={value.header} {...value} />;
        })}
      </React.Fragment>
    );
  },
  (): boolean => false,
);
