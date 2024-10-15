import { StyleSheet } from 'react-native';
import { fonts } from '../assets/fonts';
import { Colors } from './Colors';

type ParamsStyle<P, T = boolean> = {
  [keyof in P as string]: T;
};

export function customStyle<P, T = boolean>(props: ParamsStyle<P, T>) {
  return StyleSheet.create({
    categoryContainer: {
      paddingHorizontal: 8,
      backgroundColor: props?.category
        ? Colors.color95ae45
        : Colors.colorF7F7FB,
      marginLeft: 15,
      borderRadius: 60,
      alignItems: 'center',
      paddingVertical: 12,
    },

    imageContainer: {
      padding: 7,
      borderRadius: 100,
      backgroundColor: props?.category
        ? Colors.colorF5F4EC
        : Colors.colorECECEC,
    },

    categoryText: {
      paddingVertical: 10,
      color: props?.category ? Colors.colorF0ECE6 : Colors.color0A0A0A,
      // fontFamily: fonts.poppinsRegular,
      fontSize: 14,
      fontWeight: '400',
      width: 70,
      textAlignVertical: 'center',
      textAlign: 'center',
    },
  });
}
