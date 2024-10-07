import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {deviceWidth} from '../../App';
import {Colors} from '../constant';

export const WeekView = React.memo(() => {
  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  return (
    <View style={styles.weekdays}>
      {daysOfWeek.map((day, index) => (
        <Text key={String(index)} style={styles.weekdayText}>
          {day}
        </Text>
      ))}
    </View>
  );
});
const styles = StyleSheet.create({
  weekdays: {
    flexDirection: 'row',
    paddingTop: 5,
  },
  weekdayText: {
    width: deviceWidth / 7 - 4,
    textAlign: 'center',
    fontWeight: '400',
    paddingVertical: 16,
    color: Colors.color2C,
  },
});
