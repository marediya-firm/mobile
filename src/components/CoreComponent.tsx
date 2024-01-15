import {StyleProp, Text, TextStyle, View} from 'react-native';
import React, {memo} from 'react';
import {Theme, useTheme} from '@react-navigation/native';
import {GetFontStyle, variant} from '../utils';

export const CustomView = ({children}: any) => {
  return <View style={{flex: 1}}>{children}</View>;
};

interface CustomViewCenterProps {
  children: React.ReactNode;
  color?: string;
}
export const CustomViewCenter = ({children, color}: CustomViewCenterProps) => {
  const themeColor: Theme = useTheme();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color || themeColor.colors.background,
      }}>
      {children}
    </View>
  );
};

type CustomTextProps = {
  text: string | unknown;
  variant: variant;
  extraStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
};

export const CustomText = memo(
  (props: CustomTextProps) => {
    const getFontStyle = GetFontStyle();
    return (
      <Text
        style={[
          getFontStyle[props.variant || variant.F50036],
          props.extraStyle,
        ]}>
        {String(props.text)}
      </Text>
    );
  },
  (prv, cur) => prv.text !== cur.text,
);
