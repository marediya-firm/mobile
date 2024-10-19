import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SheetManager } from 'react-native-actions-sheet';
import LinearGradient from 'react-native-linear-gradient';
import { Punch } from '../../../../../assets/icon';
import { Colors } from '../../../../../utils';
import responsive, { IResponsive } from '../../../../../utils/responsive';

export const PunchButton = () => {
  const styles = useMakeStyles(responsive);
  return (
    <TouchableOpacity
      style={styles.gradientContainer}
      onPress={() => {
        SheetManager.show('punch-swipe-sheet', {
          payload: { value: 'punch-swipe-sheet' },
        });
      }}
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 10, y: 0 }}
        colors={[Colors.whiteEA, '#F1F1F1', '#E2E6EA']}
        style={styles.gradient}
      >
        <View style={styles.clockInContainerParent}>
          <View style={styles.clockInContainer}>
            <Punch />
            <Text style={styles.clockInText}>Punch In</Text>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const useMakeStyles = ({ height, width }: IResponsive) =>
  StyleSheet.create({
    gradientContainer: {
      alignItems: 'center',
      marginTop: height(8),
    },
    gradient: {
      height: height(31),
      width: width(68),
      borderRadius: width(90),
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
    clockInText: {
      fontWeight: '700',
      fontSize: 12,
      marginTop: responsive.height(1),
      color: Colors.grey46,
      left: 2,
    },
  });
