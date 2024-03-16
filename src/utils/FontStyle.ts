import {StyleSheet, TextStyle} from 'react-native';
import {Colors} from './Colors';
import {fonts} from '../assets/fonts';
import {useMemo} from 'react';

export const fontSize = {
  12: 12,
  13: 13,
  14: 14,
  15: 15,
  16: 16,
  18: 18,
  19: 19,
  24: 24,
  21: 21,
  36: 36,
};

export enum variant {
  F30012,
  F30013,
  F30014,
  F40014,
  F50016,
  F50019,
  F50021,
  F50024,
  F50036,
}

export interface FontStyleVariant {
  [variant.F30012]: TextStyle;
  [variant.F30013]: TextStyle;
  [variant.F30014]: TextStyle;
  [variant.F40014]: TextStyle;
  [variant.F50016]: TextStyle;
  [variant.F50021]: TextStyle;
  [variant.F50024]: TextStyle;
  [variant.F50036]: TextStyle;
  [variant.F50019]: TextStyle;

  textAlign: TextStyle;
  [key: string]: TextStyle;
}

export const fontStyleVariant: FontStyleVariant = {
  [variant.F30012]: {
    fontSize: fontSize[12],
    fontWeight: '300',
    fontFamily: fonts.poppinsLight,
    color: Colors.white,
  },

  [variant.F30013]: {
    fontSize: fontSize[13],
    fontWeight: '300',
    fontFamily: fonts.poppinsLight,
    color: Colors.colorAAACAE,
  },

  [variant.F30014]: {
    fontSize: fontSize[14],
    fontWeight: '300',
    fontFamily: fonts.poppinsRegular,
    color: Colors.darkBlack,
  },

  [variant.F40014]: {
    fontFamily: fonts.poppinsRegular,
    fontSize: fontSize[14],
    fontWeight: '400',
  },

  [variant.F50016]: {
    fontSize: fontSize[16],
    fontWeight: '500',
    fontFamily: fonts.poppinsRegular,
    color: Colors.darkBlack,
  },

  [variant.F50019]: {
    fontSize: fontSize[19],
    fontWeight: '500',
    fontFamily: fonts.poppinsRegular,
    color: Colors.darkBlack,
  },

  [variant.F50021]: {
    fontSize: fontSize[21],
    fontWeight: '500',
    fontFamily: fonts.poppinsMedium,
    color: Colors.color95ae45,
  },

  [variant.F50024]: {
    fontSize: fontSize[24],
    fontWeight: '500',
    fontFamily: fonts.poppinsMedium,
    color: Colors.color95ae45,
  },

  [variant.F50036]: {
    fontSize: fontSize[36],
    fontWeight: '500',
    fontFamily: fonts.poppinsMedium,
    color: Colors.color95ae45,
    textAlign: 'center',
  },
  textAlign: {textAlign: 'center'},
};

const fontStyle = StyleSheet.create(fontStyleVariant);
export const GetFontStyle = () =>
  useMemo<FontStyleVariant>(() => fontStyle, []);
