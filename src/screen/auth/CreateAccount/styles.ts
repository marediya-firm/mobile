import {StyleSheet} from 'react-native';
import {Colors} from '../../../constant/Colors';
import {fontWeight} from '../../../styling/index';
import {useMemo} from 'react';
import {fonts} from '../../../assets/fonts';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

export const mainStyles = StyleSheet.create({
  safeArea: {
    // backgroundColor: Colors.white
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainComponent: {
    marginTop: 8,
    paddingBottom: 30,
  },
  headerContainer: {
    marginTop: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: Colors.darkBlack,
    fontWeight: fontWeight.fontWeight700,
  },
  headerTextToday: {
    color: Colors.grey,
    fontWeight: fontWeight.fontWeight600,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  // button: {
  //   backgroundColor: Colors.googleBlue,
  //   borderRadius: 10,
  // },
  googleButton: {
    backgroundColor: Colors.white,
    borderColor: Colors.borderColor,
    borderWidth: 1,
    borderRadius: 10,
  },
  googleText: {
    color: Colors.googleColor,
  },
  signUpText: {
    fontSize: 36,
    fontWeight: '500',
    // fontFamily: "Poppins-Medium",
    color: '#95ae45',
    textAlign: 'center',
  },
  inputTypo: {
    fontFamily: fonts.robotoRegular,
    fontSize: 15,
    fontWeight: '400',
    color: Colors.placeHolderBlack,
  },
  inputText3: {
    color: '#c4c4c4',
  },
  inputTextParent: {},
  fullName: {
    borderRadius: 7,
    backgroundColor: '#fff',
    shadowRadius: 2.06,
    elevation: 3,
    shadowOpacity: 1,
    height: 70,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    padding: 7,
    paddingLeft: 15,
    marginVertical: 15,
  },
  inputWrapper: {
    marginTop: responsiveScreenHeight(5),
    backgroundColor: Colors.white,
    flex: 1,
    borderTopLeftRadius: 60,
  },
  inputContainer: {
    marginTop: responsiveScreenHeight(3),
    margin: responsiveScreenWidth(8),
  },
  header: {marginTop: responsiveScreenHeight(10)},
  createAnAccount1: {
    fontSize: 14,
    fontWeight: '300',
    fontFamily: 'Poppins-Light',
    color: '#95ae45',
    textAlign: 'center',
  },
  createAnAccountWrapper: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  button: {
    borderRadius: 7,
    backgroundColor: '#0a0a0a',
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 2.06,
    elevation: 2.06,
    shadowOpacity: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    margin:7,
    marginHorizontal:20
  },
});

export function marginTop(param?: number | string) {
  return {marginTop: param};
}

export const MemoStyle = () => useMemo(() => mainStyles, []);
