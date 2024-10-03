import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {IResponsive, fontStyleVariant, variant} from '../../../../utils';
import responsive from '../../../../utils/responsive';

export const useMakeStyles = ({height, width}: IResponsive) =>
  StyleSheet.create({
    customView: {
      paddingHorizontal: 18,
      flex: 1,
    },
    headerContainer: {
      flexDirection: 'row',
    },
    background: {backgroundColor: Colors.colorF9},
    circle: {
      height: 50,
      width: 50,
      borderRadius: 25,
    },
    circleOuter: {
      height: 60,
      width: 60,
      borderRadius: 30,
      backgroundColor: Colors.grey,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textContainer: {
      marginLeft: 15,
      justifyContent: 'center',
    },
    refreshContainer: {
      marginLeft: 10,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    clockInText: {
      fontWeight: '700',
      fontSize: 12,
      marginTop: responsive.height(1),
      color: Colors.grey46,
      left: 2,
    },
    clockInContainer: {
      shadowColor: Colors.colorEF,
      shadowOffset: {
        width: 1,
        height: 1,
      },
      shadowOpacity: 10,
      shadowRadius: 100,
      elevation: 5,
      height: height(23),
      width: width(51),
      borderRadius: width(80),
      backgroundColor: Colors.white,
      alignItems: 'center',
      justifyContent: 'center',
    },
    clockInContainerParent: {
      backgroundColor: Colors.colorF1,
      borderRadius: width(90),
      height: height(27),
      width: width(58),
      alignItems: 'center',
      justifyContent: 'center',
    },
    gradient: {
      height: height(31),
      width: width(68),
      borderRadius: width(90),
      alignItems: 'center',
      justifyContent: 'center',
    },
    gradientContainer: {
      alignItems: 'center',
      marginTop: height(8),
    },
    totalHoursContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: height(7),
    },
    timeText: {
      color: Colors.grey46,
    },
    employeeCodeText: {
      ...fontStyleVariant[variant.F40014],
      fontWeight: '400',
      color: Colors.grey94,
    },
    employeeNameText: {
      ...fontStyleVariant[variant.F50019],
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
