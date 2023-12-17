import {StyleSheet, TextStyle} from 'react-native';
import {Colors, ColorsType} from './Colors';
import {fonts} from '../assets/fonts';
import {useMemo} from 'react';

export const fontSize = {
  14: 14,
  15: 15,
  16: 16,
  18: 18,
  24: 24,
  36: 36,
};

interface FontStyleVariant {
  textAlign: TextStyle;
  F30014: TextStyle;
  F50036: TextStyle;
}

const fontStyleVariant: FontStyleVariant = {
  F30014: {
    fontSize: fontSize[14],
    fontWeight: '400',
    fontFamily: fonts.poppinsRegular,
    color: Colors.black,
  },

  F50036: {
    fontSize: fontSize[36],
    fontWeight: '500',
    fontFamily: fonts.poppinsMedium,
    color: Colors.color95ae45,
  },
  textAlign: {textAlign: 'center'},
};

const fontStyle = StyleSheet.create(fontStyleVariant);
export const GetFontStyle = () => useMemo(() => fontStyle, []);