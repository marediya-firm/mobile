import {Platform} from 'react-native';

type Fonts = {[key: string]: string};

export const fonts: Fonts = {
  robotoBlackItalic:
    Platform.OS === 'android'
      ? 'Roboto Black Italic'
      : 'GeneralSansVariable-Bold_Regular',
  robotoBlack:
    Platform.OS === 'android'
      ? 'Roboto Black'
      : 'GeneralSansVariable-Bold_Semibold',
  robotoBold:
    Platform.OS === 'android' ? 'Roboto Bold' : 'GeneralSansVariable-Bold',
  robotoBoldItalic:
    Platform.OS === 'android'
      ? 'Roboto BoldItalic'
      : 'GeneralSansVariable-Bold_Extralight',

  robotoItalic:
    Platform.OS === 'android'
      ? 'Roboto Italic'
      : 'GeneralSansVariable-Bold_Light',

  robotoLight:
    Platform.OS === 'android'
      ? 'Roboto Light'
      : 'GeneralSansVariable-Bold_Medium',

  robotoLightItalic:
    Platform.OS === 'android' ? 'Roboto LightItalic' : 'GeneralSans-BoldItalic',

  robotoMedium:
    Platform.OS === 'android'
      ? 'Roboto Medium'
      : 'GeneralSansVariable-BoldItalic_Extralight-Italic',

  robotoMediumItalic:
    Platform.OS === 'android'
      ? 'Roboto MediumItalic'
      : 'GeneralSansVariable-BoldItalic',

  robotoRegular:
    Platform.OS === 'android'
      ? 'Roboto Regular'
      : 'GeneralSansVariable-BoldItalic_Light-Italic',

  robotoThin:
    Platform.OS === 'android'
      ? 'Roboto Thin'
      : 'GeneralSansVariable-BoldItalic_Medium-Italic',

  robotoThinItalic:
    Platform.OS === 'android'
      ? 'Roboto ThinItalic'
      : 'GeneralSansVariable-BoldItalic_Semibold-Italic',

  poppinsMedium:
    Platform.OS === 'android'
      ? 'Poppins Medium'
      : 'GeneralSansVariable-BoldItalic_Semibold-Italic',

  poppinsRegular:
    Platform.OS === 'android'
      ? 'Poppins Regular'
      : 'GeneralSansVariable-BoldItalic_Semibold-Italic',

  poppinsSemiBoldItalic:
    Platform.OS === 'android'
      ? 'Poppins SemiBoldItalic'
      : 'GeneralSansVariable-BoldItalic_Semibold-Italic',

  poppinsThin:
    Platform.OS === 'android'
      ? 'Poppins Thin'
      : 'GeneralSansVariable-BoldItalic_Semibold-Italic',
  poppinsLight:
    Platform.OS === 'android'
      ? 'Poppins Light'
      : 'GeneralSansVariable-BoldItalic_Semibold-Italic',
};
