import {StyleProp, Text, TextProps, TextStyle, View} from 'react-native';
import React, {memo} from 'react';
import {Theme, useTheme} from '@react-navigation/native';
import {GetFontStyle, variant} from '../utils';
import {ViewProps} from 'react-native-svg/lib/typescript/fabric/utils';
import Animated, {
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

export const CustomView = ({children}: any) => {
  return <View style={{flex: 1}}>{children}</View>;
};

interface CustomViewCenterProps {
  children: React.ReactNode;
  color?: string;
  viewProps?: ViewProps;
}
export const CustomViewCenter = ({
  children,
  color,
  viewProps,
}: CustomViewCenterProps) => {
  const themeColor: Theme = useTheme();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color || themeColor.colors.background,
      }}
      {...viewProps}>
      {children}
    </View>
  );
};

type CustomTextProps = {
  text: string;
  variant: variant;
  extraStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
  textProps?: TextProps;
};

export const CustomText = memo(
  (props: CustomTextProps) => {
    const getFontStyle = GetFontStyle();
    return (
      <Animated.Text
        style={[
          getFontStyle[props.variant || variant.F30012],
          props.extraStyle,
        ]}
        {...props.textProps}>
        {String(props.text)}
      </Animated.Text>
    );
  },
  (prv, cur) => prv.text !== cur.text,
);
