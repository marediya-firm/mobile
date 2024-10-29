import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { Colors } from '../utils/Colors';
import { LoadingIndicator } from './LoadingIndicator';

interface button {
  wrapperStyle?: StyleProp<ViewStyle>;
  title: string;
  buttonStyle?: StyleProp<ViewStyle>;
  Icon?: React.ReactNode;
  onPress?: () => void;
  textStyle?: StyleProp<TextStyle>;
  isShowIcon?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

export const CommonButton = (props: button) => {
  const {
    wrapperStyle,
    title,
    buttonStyle,
    Icon,
    onPress,
    textStyle,
    disabled = false,
    loading,
  } = props;
  return (
    <View style={[wrapperStyle]}>
      <TouchableOpacity
        disabled={disabled}
        activeOpacity={0.9}
        onPress={onPress}
        style={[innerStyle.innerButton, buttonStyle]}
      >
        {loading ? (
          <LoadingIndicator color={Colors.borderColor} size={20} />
        ) : (
          <>
            <View style={innerStyle.icon}>{Icon}</View>
            <Text style={[textStyle]}>{title}</Text>
          </>
        )}
      </TouchableOpacity>
    </View>
  );
};

const innerStyle = StyleSheet.create({
  innerButton: {
    height: 48,
    marginHorizontal: 39,
    backgroundColor: Colors.blue,
    alignItems: 'center',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    left: 9,
  },
});
