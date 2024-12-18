export type FontsKey =
  | 'robotoBlackItalic'
  | 'robotoBlack'
  | 'robotoBoldItalic'
  | 'robotoItalic'
  | 'robotoLight'
  | 'robotoMedium'
  | 'robotoMediumItalic'
  | 'robotoRegular'
  | 'robotoThin'
  | 'robotoThinItalic'
  | 'poppinsMedium'
  | 'poppinsRegular'
  | 'poppinsSemiBoldItalic'
  | 'poppinsThin'
  | 'poppinsLight'
  | 'robotoBold'
  | 'robotoLightItalic'
  | 'oswaldLight'
  | 'PoppinsBold'
  | 'BebasNeue';

type Fonts = {
  [key in FontsKey]: string;
};

export const fonts: Fonts = {
  robotoBlackItalic: 'Roboto Black Italic',

  robotoBlack: 'Roboto Black',

  robotoBoldItalic: 'Roboto BoldItalic',

  robotoItalic: 'Roboto Italic',

  robotoLight: 'Roboto Light',

  robotoMedium: 'Roboto Medium',

  robotoMediumItalic: 'Roboto MediumItalic',

  robotoRegular: 'Roboto Regular',

  robotoThin: 'Roboto Thin',

  robotoThinItalic: 'Roboto ThinItalic',

  poppinsMedium: 'Poppins Medium',

  poppinsRegular: 'Poppins Regular',

  poppinsSemiBoldItalic: 'Poppins SemiBoldItalic',

  poppinsThin: 'Poppins Thin',

  poppinsLight: 'Poppins Light',

  PoppinsBold: 'Poppins-Bold',

  robotoBold: 'Roboto Bold',

  robotoLightItalic: 'Roboto LightItalic',

  oswaldLight: 'Oswald-Bold',

  BebasNeue: 'BebasNeue-Regular',
};
