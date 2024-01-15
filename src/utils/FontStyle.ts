import {StyleSheet, TextStyle} from 'react-native';
import {Colors} from './Colors';
import {fonts} from '../assets/fonts';
import {useMemo} from 'react';

export const fontSize = {
  12: 12,
  14: 14,
  15: 15,
  16: 16,
  18: 18,
  24: 24,
  21: 21,
  36: 36,
};

export enum variant {
  F30012,
  F30014,
  F50021,
  F50036,
}

export interface FontStyleVariant {
  [variant.F30012]: TextStyle;
  [variant.F30014]: TextStyle;
  [variant.F50021]: TextStyle;
  [variant.F50036]: TextStyle;
  textAlign: TextStyle;
  [key: string]: TextStyle;
}

export const fontStyleVariant: FontStyleVariant = {
  [variant.F30012]: {
    fontSize: 14,
    fontWeight: '300',
    fontFamily: fonts.poppinsLight,
    color: "white",
  },

  [variant.F30014]: {
    fontSize: fontSize[14],
    fontWeight: '300',
    fontFamily: fonts.poppinsRegular,
    color: Colors.black,
  },

  [variant.F50021]: {
    fontSize: fontSize[21],
    fontWeight: '500',
    fontFamily: fonts.poppinsMedium,
    color: Colors.color95ae45,
  },

  [variant.F50036]: {
    fontSize: fontSize[36],
    fontWeight: '500',
    fontFamily: fonts.poppinsMedium,
    color: Colors.color95ae45,
    textAlign:"center"
  },
  textAlign: {textAlign: 'center'},
};

const fontStyle = StyleSheet.create(fontStyleVariant);
export const GetFontStyle = () => useMemo(() => fontStyle, []);
