import {useMemo} from 'react';

export type ColorsType = {
  [key in
    | 'white'
    | 'grey'
    | 'semiGrey'
    | 'borderColor'
    | 'placeHolderBlack'
    | 'googleColor'
    | 'darkBlack'
    | 'blue'
    | 'googleBlue'
    | 'loginBlue'
    | 'Orange'
    | 'heavyDark'
    | 'semiBlue'
    | 'placeHolderTextBlack'
    | 'darkGreen'
    | 'snowWhite'
    | 'snowGrey'
    | 'primaryColor'
    | 'offWhite'
    | 'color95ae45'
    | 'shadowBlack'
    | 'color898989'
    | 'color151522'
    | 'colorF5F4EC'
    | 'colorF0ECE6'
    | 'colorF7F7FB'
    | 'colorECECEC'
    | 'color0A0A0A'
    | 'colorAAACAE'
    | 'grey3']: string;
};

export const Colors: ColorsType = {
  grey: '#343434',
  grey3: '#343449',
  borderColor: 'rgba(0, 0, 0, 0.4)',
  placeHolderBlack: 'rgba(0, 0, 0, 0.7)',
  googleColor: 'rgba(0, 0, 0, 0.6)',
  color151522: '#151522',
  color0A0A0A: '#0A0A0A',
  darkBlack: '#000',
  semiBlue: '#211347',
  placeHolderTextBlack: '#121212',
  primaryColor: '#0A0A0A',
  heavyDark: '#0E1333',
  shadowBlack: '#0a0a0a',

  snowWhite: '#F0FFFF',
  white: '#FFFFFF',
  colorF5F4EC: '#F5F4EC',
  colorF0ECE6: '#F0ECE6',
  colorF7F7FB: '#F7F7FB',
  colorECECEC: '#ECECEC',
  snowGrey: '#D0D0D0',

  offWhite: '#c4c4c4',
  color898989: '#898989',
  colorAAACAE: '#AAACAE',
  semiGrey: '#A9A9A9',

  blue: '#0E64D2',
  googleBlue: '#1877F2',
  loginBlue: '#2F89FC',

  Orange: '#E86969',

  color95ae45: '#95ae45',
  darkGreen: '#024b30',
};

export const ConstantColor = () => useMemo(() => Colors, []);
