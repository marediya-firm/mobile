import React, { startTransition, useCallback, useMemo, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import moment from 'moment';
import { WeekView } from './WeekView';
import { RenderDay } from './export';
import { fontStyleVariant, variant } from '../utils';
import { loadDataFromHttpsHookApi } from '../hook/export';
import { HttpRequest } from '../https/export';
import { deviceWidth } from '../../App';
import { BackButtons } from '../screen/dashboard/History/export';
export const endOfTheMonth = (data: moment.Moment) =>
  data.clone().endOf('month').format('YYYY-MM-DD');

export const startOfTheMonth = (data: moment.Moment) =>
  data.clone().startOf('month').format('YYYY-MM-DD');

export const CalenderView = () => {
  const [currentMonth, setCurrentMonth] = useState(moment());

  const startOfMonth = currentMonth.clone().startOf('month');
  const endOfMonth = currentMonth.clone().endOf('month');

  // Generate days including empty spaces for alignment
  const generateDays = useMemo(() => {
    const days = [];
    const firstDayOfMonth = startOfMonth.clone();
    const startOfWeekday = firstDayOfMonth.weekday(); // Weekday of first day in month (0 for Sunday, 1 for Monday, etc.)

    // Add empty slots for days before the first day of the month
    for (let i = 0; i < startOfWeekday; i++) {
      days.push(null); // Adding null for each empty day slot
    }

    // Add actual days of the month
    const day = startOfMonth.clone();
    while (day.isSame(currentMonth, 'month')) {
      days.push(day.clone());
      day.add(1, 'day');
    }

    return days;
  }, [currentMonth]);

  const startDate = startOfMonth.format('YYYY-MM-DD');
  const endDate = endOfMonth.format('YYYY-MM-DD');

  const getCalenderData = loadDataFromHttpsHookApi<'leaveDetails'>({
    endPoint: HttpRequest.apiEndPoint.getLeaveRequest,
    payload: { endDate, startDate },
    zustandKey: 'useHistoryZustand',
  });

  const handlePrvNxt = useCallback(
    async (next?: boolean) => {
      const change = currentMonth.clone().subtract(!next ? 1 : -1, 'month');
      await getCalenderData({
        endDate: endOfTheMonth(change),
        startDate: startOfTheMonth(change),
      });

      startTransition(() => {
        setCurrentMonth(change);
      });
    },
    [currentMonth],
  );

  return (
    <>
      <View style={styles.container}>
        <Text style={fontStyleVariant[variant.F50015]}>
          {currentMonth.format('MMMM YYYY')}
        </Text>
      </View>
      <BackButtons handlePrvNxt={handlePrvNxt} />
      <WeekView />
      <FlatList
        scrollEnabled={false}
        data={generateDays}
        renderItem={
          ({ item }) =>
            item ? <RenderDay day={item} /> : <View style={styles.emptyDay} /> // Render empty view for null slots
        }
        keyExtractor={(item, index) =>
          item ? item.format('DD-MM-YYYY') : `empty-${index}`
        }
        numColumns={7}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emptyDay: {
    width: deviceWidth / 7 - 4,
    height: 35,
  },
});
