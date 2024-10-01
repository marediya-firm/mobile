import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export interface IResponsive {
  height: (value: number) => number;
  width: (value: number) => number;
  fontSize: (value: number) => number;
}

export default {
  height: (value: number) => responsiveHeight(value),
  width: (value: number) => responsiveWidth(value),
  fontSize: (value: number) => responsiveFontSize(value),
} as IResponsive;
