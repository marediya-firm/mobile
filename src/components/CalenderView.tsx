import React, { startTransition, useCallback, useMemo, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import moment from 'moment';
import { WeekView } from './WeekView';
import { RenderDay } from './export';
import {
  endOfTheMonth,
  fontStyleVariant,
  startOfTheMonth,
  variant,
} from '../utils';
import { loadDataFromHttpsHookApi } from '../hook/export';
import { HttpRequest } from '../https/export';
import { deviceWidth } from '../../App';
import { BackButtons } from '../screen/dashboard/History/export';
import { useHistoryZustand } from '../zustand/history/HistoryStore';

export const CalenderView = () => {
  const [currentMonth, setCurrentMonth] = useState(moment());

  const startOfMonth = currentMonth.clone().startOf('month');
  const endOfMonth = currentMonth.clone().endOf('month');
  const startDate = startOfMonth.format('YYYY-MM-DD');
  const endDate = endOfMonth.format('YYYY-MM-DD');
  const payload = { endDate, startDate };
  const zustandKey = 'useHistoryZustand';

  // Generate days including empty spaces for alignment
  const calenderDays = useMemo(() => {
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

  /**
   * Calling Api Hook and based on key set the response value in zustand
   * @see avoid propr drilling
   * Getting leave-record response based on months
   */
  const getLeaveRecordByMonth = loadDataFromHttpsHookApi<'leaveDetails'>({
    endPoint: HttpRequest.apiEndPoint.getLeaveRequest,
    payload,
    zustandKey,
    delay: 500,
  });

  /**
   * Calling Api Hook and based on key set the response value in zustand
   * @see avoid propr drilling
   * Getting punch-record response based on months
   */
  const getPunchRecordsByMonth = loadDataFromHttpsHookApi<'punchDetailByDate'>({
    endPoint: HttpRequest.apiEndPoint.getPunchDetailByDate,
    zustandKey,
    payload,
    setter: 'setAttendanceData',
    delay: 500,
  });

  const handlePrvNxt = useCallback(
    async (next?: boolean) => {
      const change = currentMonth.clone().subtract(!next ? 1 : -1, 'month');
      const store = useHistoryZustand.getState();

      const payload = {
        endDate: endOfTheMonth(change),
        startDate: startOfTheMonth(change),
      };

      if (store?.caching?.leave[startDate]) {
        store.setData(store.caching.leave[startDate], payload);
        store.setAttendanceData(store.caching.punch[startDate], payload);
      } else {
        await getPunchRecordsByMonth(payload);
        await getLeaveRecordByMonth(payload);
      }

      /**
       * For delay response because we have to ensure first response come and than date
       */
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
        data={calenderDays}
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
