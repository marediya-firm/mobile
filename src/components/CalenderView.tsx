import React, { startTransition, useMemo, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import moment from 'moment';
import { WeekView } from './WeekView';
import { RenderDay } from './export';
import { Arrow } from '../assets/icon';
import { fontStyleVariant, variant } from '../utils';
import responsive from '../utils/responsive';
import { loadDataFromHttpsHookApi } from '../hook/export';
import { HttpRequest } from '../https/export';
import { deviceWidth } from '../../App';
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

  const handlePrvNxt = async (next?: boolean) => {
    const change = currentMonth.clone().subtract(!next ? 1 : -1, 'month');
    await getCalenderData({
      endDate: endOfTheMonth(change),
      startDate: startOfTheMonth(change),
    });

    startTransition(() => {
      setCurrentMonth(change);
    });
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={fontStyleVariant[variant.F50015]}>
          {currentMonth.format('MMMM YYYY')}
        </Text>
        <View style={styles.rightContainer}>
          <View style={styles.row}>
            <Pressable
              style={styles.arrowButton}
              onPress={() => handlePrvNxt()}
            >
              <Arrow left />
            </Pressable>
            <Pressable
              style={styles.arrowButton}
              onPress={() => handlePrvNxt(true)}
            >
              <Arrow />
            </Pressable>
          </View>
        </View>
      </View>
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
        ListEmptyComponent={() => (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ActivityIndicator size={'large'} />
          </View>
        )}
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
  rightContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  row: {
    flexDirection: 'row',
  },
  arrowButton: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#F7F8FC',
    marginRight: responsive.width(3),
  },
  emptyDay: {
    width: deviceWidth / 7 - 4,
    height: 35,
  },
});
