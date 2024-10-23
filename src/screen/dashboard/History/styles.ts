import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const useMakeStyle = () =>
  StyleSheet.create({
    wrapper: {
      paddingTop: 8,
      flex: 1,
    },
    background: { backgroundColor: Colors.colorF9 },
    headerText: {
      shadowColor: Colors.borderColor,
      shadowOpacity: 0.3,
      shadowOffset: {
        height: 1,
        width: 1,
      },
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      paddingTop: 4,
    },
    calenderView: {
      flex: 1,
      backgroundColor: Colors.white,
      marginHorizontal: 8,
      paddingHorizontal: 3,
      paddingVertical: 8,
      paddingBottom: 12,
      borderRadius: 10,
      marginTop: 20,
    },
    headerWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 12,
    },
  });
