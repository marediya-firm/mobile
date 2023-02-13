import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {Colors} from '../constant';
interface load {
  size: number | undefined | string | any;
  color?: StyleProp<View | ActivityIndicator> | undefined | string;
}
export const LoadingIndicator = (props: load) => {
  const {size, color} = props;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.heavyDark,
      }}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({});
