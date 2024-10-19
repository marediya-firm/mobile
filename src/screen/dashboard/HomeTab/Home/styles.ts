import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { IResponsive, fontStyleVariant, variant } from '../../../../utils';

export const useMakeStyles = ({ height }: IResponsive) =>
  StyleSheet.create({
    customView: {
      paddingHorizontal: 18,
      flex: 1,
    },
    headerContainer: {
      flexDirection: 'row',
    },
    background: { backgroundColor: Colors.colorF9, paddingHorizontal: 0 },

    refreshContainer: {
      marginLeft: 10,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
    },

    totalHoursContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: height(7),
    },
    timeText: {
      color: Colors.grey46,
    },
    timeText1: {
      ...fontStyleVariant[variant.F60014],
      marginTop: height(1.5),
      marginBottom: height(0.6),
    },
    totalHoursContainerWrapper: {
      alignItems: 'center',
    },
  });
