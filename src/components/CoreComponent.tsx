import {
  SafeAreaView,
  StyleProp,
  StyleSheet,
  Text,
  TextProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React, {memo} from 'react';
import {Theme, useTheme} from '@react-navigation/native';
import {GetFontStyle, variant} from '../utils';
import {ViewProps} from 'react-native-svg/lib/typescript/fabric/utils';
import Animated, {AnimatedStyle} from 'react-native-reanimated';

interface CustomViewProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}
export const CustomView = ({children, style}: CustomViewProps) => {
  const flex = {flex: 1, ...(style as ViewStyle)};
  return (
    <View style={flex}>
      <SafeAreaView />
      {children}
    </View>
  );
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
  const styles = useStyle(themeColor, color);
  return (
    <View style={styles.container} {...viewProps}>
      {children}
    </View>
  );
};

const useStyle = (themeColor: Theme, color?: string) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: color || themeColor.colors.background,
    },
  });

type CustomTextProps = {
  text: string;
  variant: variant;
  extraStyle?:
    | StyleProp<AnimatedStyle<StyleProp<TextStyle>>>
    | StyleProp<TextStyle>;
  onPress?: () => void;
  textProps?: TextProps;
  isAnimated?: boolean;
};

export const CustomText = memo(
  (props: CustomTextProps) => {
    const getFontStyle = GetFontStyle();
    const PureText = props.isAnimated ? Animated.Text : Text;
    return (
      <PureText
        style={[
          getFontStyle[props.variant || variant.F30012],
          props.extraStyle,
        ]}
        {...props.textProps}>
        {String(props.text)}
      </PureText>
    );
  },
  (prv, cur) => prv.text !== cur.text,
);
