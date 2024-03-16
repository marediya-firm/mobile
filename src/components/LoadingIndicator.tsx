import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {Colors} from '../constant';
import {CustomViewCenter, Load} from './export';

export const LoadingIndicator = (props: Load) => {
  const {size, color, style} = props;
  return (
    <CustomViewCenter
      color={color || Colors.darkBlack}
      viewProps={{style: style}}>
      <ActivityIndicator size={size || 'large'} color={Colors.darkBlack} />
    </CustomViewCenter>
  );
};
