import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import moment from 'moment';
import { deviceWidth } from '../../App';
import { Colors } from '../constant';
import { WeekView } from './WeekView';

export const CalenderView = () => {
  const [currentMonth, setCurrentMonth] = useState(moment());

  const startOfMonth = currentMonth.clone().startOf('month');
  const endOfMonth = currentMonth.clone().endOf('month');
  const startOfWeek = startOfMonth.clone().startOf('week');
  const endOfWeek = endOfMonth.clone().endOf('week');

  const generateDays = () => {
    const days = [];
    let day = startOfWeek.clone();

    while (day.isBefore(endOfWeek, 'day')) {
      days.push(day.clone());
      day.add(1, 'day');
    }

    return days;
  };

  return (
    <>
      {/* Days of Week */}
      <WeekView />
      {/* Days of Month */}
      <FlatList
        scrollEnabled={false}
        data={generateDays()}
        renderItem={({ item }) => <RenderDay day={item} />}
        keyExtractor={item => item.format('DD-MM-YYYY')}
        numColumns={7}
      />
    </>
  );
};

export type RenderDayProps = {
  day: moment.Moment;
};

const RenderDay = React.memo((props: RenderDayProps) => {
  const { day } = props;
  const weekEnd = { 0: true };

  const isWeekDay = !weekEnd[day.weekday() as 0];
  return (
    <TouchableOpacity style={[styles.dayContainer]}>
      <Text
        style={[
          styles.dayText,
          { color: isWeekDay ? Colors.grey46 : Colors.colorD7 },
        ]}
      >
        {day.format('D')}
      </Text>
    </TouchableOpacity>
  );
});

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
