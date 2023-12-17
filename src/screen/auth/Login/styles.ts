import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils/Colors';
import {useMemo} from 'react';
import {
  responsiveHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

export const appStyles = StyleSheet.create({
  safeArea: {
    backgroundColor: Colors.white,
  },
  logo: {alignItems: 'center', marginTop: responsiveHeight(7)},
  inputWrapper: {
    backgroundColor: Colors.white,
    flex: 1,
    borderTopLeftRadius: 60,
  },
  inputContainer: {
    marginTop: responsiveHeight(2),
    margin: responsiveScreenWidth(8),
  },

  continueWithGoogle1: {
    fontSize: 14,
    fontWeight: '300',
    fontFamily: 'Poppins-Light',
    color: 'rgba(0, 0, 0, 0.54)',
    paddingLeft: 12,
  },
  continueWithGoogleLeftAl1: {
    borderRadius: 7,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 100,
      height: 100,
    },
    shadowRadius: 2.06,
    elevation: 2.06,
    shadowOpacity: 1,
    marginTop: 20,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 40,
    padding: 10,
  },
  createAnAccount1: {
    color: Colors.color95ae45,
    textAlign: 'center',
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
});

export const AppStyle = () => useMemo(() => appStyles, []);
