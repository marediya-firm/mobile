import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils/Colors';
import {useMemo} from 'react';
import {fonts} from '../../../assets/fonts';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

export const mainStyles = StyleSheet.create({
  safeArea: {},
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainComponent: {
    marginTop: 8,
    paddingBottom: 30,
  },
  flexGrow: {flexGrow: 1},
  headerContainer: {
    marginTop: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: Colors.darkBlack,
  },
  headerTextToday: {
    color: Colors.grey,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
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
    marginTop: responsiveScreenHeight(4.5),
    margin: responsiveScreenWidth(8),
  },
  header: {marginTop: responsiveScreenHeight(7)},
  createAnAccount1: {
    fontSize: 14,
    fontWeight: '300',
    fontFamily: fonts.poppinsRegular,
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
    marginTop: 24,
    marginHorizontal: 40,
  },
  back: {top: 24, left: 24, position: 'absolute'},
});

export function marginTop(param?: number | string) {
  return {marginTop: param};
}

export const MemoStyle = () => useMemo(() => mainStyles, []);
