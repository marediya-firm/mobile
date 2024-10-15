import { StyleSheet } from 'react-native';
import { Colors } from '../../../utils/Colors';
import { useMemo } from 'react';
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
  flexGrow: { flexGrow: 1 },
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
  header: { marginTop: responsiveScreenHeight(7) },
  createAnAccountWrapper: {
    paddingHorizontal: 16,
    paddingVertical: 8,
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
  textAlignCenter: { textAlign: 'center' },
});

export const MemoStyle = () => useMemo(() => mainStyles, []);
