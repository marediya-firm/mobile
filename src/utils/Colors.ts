import {useMemo} from 'react';

export interface ColorsType {
  [key: string]: string;
}

export const Colors: ColorsType = {
  white: '#FFFFFF',
  grey: '#343434',
  semiGrey: '#A9A9A9',
  borderColor: 'rgba(0, 0, 0, 0.4)',
  placeHolderBlack: 'rgba(0, 0, 0, 0.7)',
  googleColor: 'rgba(0, 0, 0, 0.6)',
  darkBlack: '#000',
  blue: '#0E64D2',
  googleBlue: '#1877F2',
  loginBlue: '#2F89FC',
  Orange: '#E86969',
  heavyDark: '#0E1333',
  semiGreen: '#00F6C5',
  semiBlue: '#211347',
  placeHolderTextBlack: '#121212',
  darkGreen: '#024b30',
  snowWhite: '#F0FFFF',
  snowGrey: '#D0D0D0',
  primaryColor: '#0A0A0A',
  offWhite: '#c4c4c4',
  color95ae45: '#95ae45',
  shadowBlack: '#0a0a0a',
};

export const ConstantColor = () => useMemo(() => Colors, []);
