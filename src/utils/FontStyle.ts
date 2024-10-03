import {StyleSheet, TextStyle} from 'react-native';
import {Colors} from './Colors';
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
  22: 22,
  36: 36,
  50: 50,
};

export enum variant {
  F30012,
  F40012,
  F30013,
  F60013,
  F30014,
  F40014,
  F60014,
  F50015,
  F50016,
  F50019,
  F50021,
  F50022,
  F50024,
  F50036,
  F30050,
}

export interface FontStyleVariant {
  [variant.F30012]: TextStyle;
  [variant.F40012]: TextStyle;
  [variant.F30013]: TextStyle;
  [variant.F60013]: TextStyle;
  [variant.F30014]: TextStyle;
  [variant.F40014]: TextStyle;
  [variant.F60014]: TextStyle;
  [variant.F50015]: TextStyle;
  [variant.F50016]: TextStyle;
  [variant.F50021]: TextStyle;
  [variant.F50022]: TextStyle;
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
    // fontFamily: Platform.OS === 'android' ? fonts.poppinsLight : '',
    color: Colors.white,
  },
  [variant.F40012]: {
    fontSize: fontSize[12],
    fontWeight: '400',
    // fontFamily: Platform.OS === 'android' ? fonts.poppinsLight : '',
    color: Colors.grey94,
  },

  [variant.F30013]: {
    fontSize: fontSize[13],
    fontWeight: '300',
    // fontFamily: Platform.OS === 'android' ? fonts.poppinsLight : '',
    color: Colors.colorAAACAE,
  },

  [variant.F60013]: {
    fontSize: fontSize[13],
    fontWeight: '600',
    // fontFamily: Platform.OS === 'android' ? fonts.poppinsLight : '',
    color: Colors.white,
  },

  [variant.F30014]: {
    fontSize: fontSize[14],
    fontWeight: '300',
    // fontFamily: Platform.OS === 'android' ? fonts.poppinsRegular : '',
    color: Colors.darkBlack,
  },

  [variant.F40014]: {
    // fontFamily: Platform.OS === 'android' ? fonts.poppinsRegular : '',
    fontSize: fontSize[14],
    fontWeight: '400',
  },

  [variant.F60014]: {
    // fontFamily: Platform.OS === 'android' ? fonts.poppinsRegular : '',
    fontSize: fontSize[14],
    fontWeight: '600',
    color: Colors.grey46,
  },

  [variant.F50015]: {
    // fontFamily: Platform.OS === 'android' ? fonts.poppinsRegular : '',
    fontSize: fontSize[15],
    fontWeight: '500',
    color: Colors.grey46,
  },

  [variant.F50016]: {
    fontSize: fontSize[16],
    fontWeight: '500',
    // fontFamily: Platform.OS === 'android' ? fonts.poppinsRegular : '',
    color: Colors.darkBlack,
  },

  [variant.F50019]: {
    fontSize: fontSize[19],
    fontWeight: '500',
    // fontFamily: Platform.OS === 'android' ? fonts.poppinsRegular : '',
    color: Colors.darkBlack,
  },

  [variant.F50021]: {
    fontSize: fontSize[21],
    fontWeight: '500',
    // fontFamily: Platform.OS === 'android' ? fonts.poppinsMedium : '',
    color: Colors.color95ae45,
  },

  [variant.F50022]: {
    fontSize: fontSize[22],
    fontWeight: '500',
    // fontFamily: Platform.OS === 'android' ? fonts.poppinsMedium : '',
    color: Colors.grey46,
  },

  [variant.F50024]: {
    fontSize: fontSize[24],
    fontWeight: '500',
    // fontFamily: Platform.OS === 'android' ? fonts.poppinsMedium : '',
    color: Colors.color95ae45,
  },

  [variant.F50036]: {
    fontSize: fontSize[36],
    fontWeight: '500',
    // fontFamily: Platform.OS === 'android' ? fonts.poppinsMedium : '',
    color: Colors.color95ae45,
    textAlign: 'center',
  },
  [variant.F30050]: {
    fontSize: fontSize[50],
    fontWeight: '300',
    // fontFamily: Platform.OS === 'android' ? fonts.poppinsMedium : '',
    color: Colors.grey46,
  },
  textAlign: {textAlign: 'center'},
};

const fontStyle = StyleSheet.create(fontStyleVariant);
export const GetFontStyle = () =>
  useMemo<FontStyleVariant>(() => fontStyle, []);
