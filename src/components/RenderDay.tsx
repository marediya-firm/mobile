import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  TextStyle,
} from 'react-native';
import { deviceWidth } from '../../App';
import { Colors } from '../utils';
import { RenderDayProps } from './export';

export const RenderDay = React.memo((props: RenderDayProps) => {
  const { day } = props;
  const number = day.format('D');
  const digit = props.leaveCalenderDate[String(number)];
  console.log('leaveCalenderDate', props.leaveCalenderDate);

  const leave = {
    end: Number(new Date(digit?.endDate).getDate()),
    start: Number(new Date(digit?.startDate).getDate()),
  };
  const weekEnd = { 0: true };

  const isWeekDay = !weekEnd[day.weekday() as 0];
  const color: StyleProp<TextStyle> = {
    color: isWeekDay ? Colors.grey46 : Colors.colorD7,
  };

  console.log('leave?.start', Number(number), leave?.start);

  if (Number(number) > leave?.start) {
    console.log('call');
    color.color = 'red';
  }
  return (
    <TouchableOpacity style={[styles.dayContainer]}>
      <Text style={[styles.dayText, color]}>{number}</Text>
    </TouchableOpacity>
  );
});

RenderDay.displayName = 'RenderDay';

const styles = StyleSheet.create({
  dayContainer: {
    width: deviceWidth / 7 - 4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderColor: '#ddd',
  },
  dayText: {
    fontSize: 16,
  },
});
