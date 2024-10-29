import { StackHeaderProps } from '@react-navigation/stack';
import React, { memo } from 'react';
import { Pressable } from 'react-native';
import { Back } from '../assets/icon';

export const AuthHeader = memo(
  (props: StackHeaderProps) => {
    return (
      <React.Fragment>
        {props.back && (
          <Pressable
            onPress={props.navigation.goBack}
            style={{ top: 25, left: 24, position: 'absolute' }}
          >
            <Back />
          </Pressable>
        )}
      </React.Fragment>
    );
  },
  /**
   * To check pervious value and current value if difference component should rerender
   */
  (prv, curr) => prv.back !== curr.back,
);

AuthHeader.displayName = 'AuthHeader';
