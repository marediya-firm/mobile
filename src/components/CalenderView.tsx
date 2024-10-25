import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useMemo, useState } from 'react';
import moment from 'moment';
import { WeekView } from './WeekView';
import { RenderDay } from './export';
import { Arrow } from '../assets/icon';
import { fontStyleVariant, variant } from '../utils';
import responsive from '../utils/responsive';
import { loadDataFromHttpsHookApi } from '../hook/export';
import { HttpRequest } from '../https/export';
import { useHistoryZustand } from '../zustand/history/HistoryStore';

export const CalenderView = () => {
  const [currentMonth, setCurrentMonth] = useState(moment());

  const startOfMonth = currentMonth.clone().startOf('month');
  const endOfMonth = currentMonth.clone().endOf('month');
  const startOfWeek = startOfMonth.clone().startOf('week');
  const endOfWeek = endOfMonth.clone().endOf('week');
  const leaveCalenderDate = useHistoryZustand(state => state.calender);

  const generateDays = useMemo(() => {
    const days = [];
    const day = startOfWeek.clone();
    while (day.isBefore(endOfWeek, 'day')) {
      days.push(day.clone());
      day.add(1, 'day');
    }
    return days;
  }, [currentMonth]);

  const startDate = moment().startOf('month').format('YYYY-MM-DD');
  const endDate = moment().endOf('month').format('YYYY-MM-DD');

  /**
   * Calling Api Hook and based on key set the response value in zustand
   * @see avoid propr drilling
   */
  loadDataFromHttpsHookApi<'leaveDetails'>({
    endPoint: HttpRequest.apiEndPoint.getLeaveRequest,
    payload: { endDate, startDate },
    zustandKey: 'useHistoryZustand',
  });

  return (
    <>
      <View style={styles.container}>
        <Text style={fontStyleVariant[variant.F50015]}>
          {currentMonth.format('MMMM YYYY')}
        </Text>
        <View style={styles.rightContainer}>
          <View style={styles.row}>
            <View style={styles.arrowButton}>
              <Arrow left />
            </View>
            <View style={styles.arrowButton}>
              <Arrow />
            </View>
          </View>
        </View>
      </View>
      {/* Days of Week */}
      <WeekView />
      {/* Days of Month */}
      <FlatList<moment.Moment>
        scrollEnabled={false}
        data={generateDays}
        renderItem={({ item }) => (
          <RenderDay leaveCalenderDate={leaveCalenderDate} day={item} />
        )}
        keyExtractor={item => item.format('DD-MM-YYYY')}
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
});
