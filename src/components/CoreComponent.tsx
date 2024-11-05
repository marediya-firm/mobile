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
import React, { memo } from 'react';
import { GetFontStyle, variant } from '../utils';
import { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils';
import Animated from 'react-native-reanimated';
import { LoadingIndicator } from './LoadingIndicator';

interface CustomViewProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  isLoading?: boolean;
}
export const CustomView = ({ children, style, isLoading }: CustomViewProps) => {
  const flex = { flex: 1, ...(style as ViewStyle) };
  if (isLoading) {
    return <LoadingIndicator size={50} color="red" />;
  }

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
  viewProps,
}: CustomViewCenterProps) => {
  const styles = useStyle();
  return (
    <View {...viewProps} style={styles.container}>
      {children}
    </View>
  );
};

const useStyle = () =>
  StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

type CustomTextProps = {
  text: string;
  variant: variant;
  extraStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
  textProps?: TextProps;
  isAnimated?: boolean;
};

export const CustomText = memo(
  (props: CustomTextProps) => {
    const getFontStyle = GetFontStyle();
    const PureText = props.isAnimated ? Animated.Text : Text;

    const style = [
      getFontStyle[props.variant],
      props.extraStyle,
    ] as StyleProp<TextStyle>;
    return (
      <PureText style={style} {...props.textProps}>
        {String(props.text)}
      </PureText>
    );
  },
  (prv, cur) => prv.text !== cur.text,
);

CustomText.displayName = 'CustomText';
