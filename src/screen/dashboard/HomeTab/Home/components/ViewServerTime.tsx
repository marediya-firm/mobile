import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import responsive, { IResponsive } from '../../../../../utils/responsive';
import { Colors, fontStyleVariant, variant } from '../../../../../utils';
import { WorldTime } from '../../../../../hook/WorldTime';

export const ViewServerTime = React.memo(
  () => {
    const styles = useMakeStyle(responsive);
    const [serverTime] = WorldTime();
    return (
      <View style={styles.timeContainer}>
        <Text style={fontStyleVariant[variant.F30050]}>
          {serverTime?.currentTime}
        </Text>
        <Text style={styles.dateText}>{serverTime?.currentDate}</Text>
      </View>
    );
  },
  () => false,
);

ViewServerTime.displayName = 'ViewServerTime';

const useMakeStyle = ({ height }: IResponsive) =>
  StyleSheet.create({
    timeContainer: {
      alignItems: 'center',
      marginTop: height(4),
    },
    dateText: {
      ...fontStyleVariant[variant.F40014],
      color: Colors.grey46,
    },
  });
