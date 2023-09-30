import {StyleSheet} from 'react-native';
import {Colors} from '../../../constant/Colors';
import {fontWeight} from '../../../styling/index';

export const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: Colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  mainComponent: {
    marginTop: 8,
    paddingBottom: 50,
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
  button: {
    backgroundColor: Colors.googleBlue,
    borderRadius: 10,
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
});

export function marginTop(param?: number | string) {
  return {marginTop: param};
}
