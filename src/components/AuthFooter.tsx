import {Pressable, StyleSheet, Text} from 'react-native';
import React, {FC, memo} from 'react';
import {GetFontStyle} from '../utils/FontStyle';
import {Colors, CustomView} from '../utils';

interface ButtonPressProps {
  title: string;
  onPress?: () => void;
}

const AuthFooter: FC<ButtonPressProps> = memo((props: ButtonPressProps) => {
  const getFontStyle = GetFontStyle();
  const {onPress = () => {}, title} = props;
  return (
    <CustomView>
      <Text
        onPress={onPress}
        style={[getFontStyle.F30014, getFontStyle.textAlign, styles.color]}>
        {title}
      </Text>
    </CustomView>
  );
});

export {AuthFooter};

const styles = StyleSheet.create({
  color: {color: Colors.darkBlack},
});
