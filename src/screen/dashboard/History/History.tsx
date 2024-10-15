import {
  FlatList,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { CustomView } from '../../../components/CoreComponent';
import { Colors, fontStyleVariant, variant } from '../../../utils';
type PunchRecord = {
  day: Moment;
  punchIn: string;
  punchOut: string;
  totalHours: string;
};

export const week = ['SUN', 'MON', 'TUE', 'WED', 'FRI', 'SAT'];
// export const punchRecord: PunchRecord[] = [
//   {
//     day: moment(),
//     punchIn: '09:08 AM',
//     punchOut: '06:05 PM',
//     totalHours: '08:13 ',
//   },
// ];
export const punchRecord: PunchRecord[] = [
  {
    day: moment(),
    punchIn: '09:08 AM',
    punchOut: '06:05 PM',
    totalHours: '08:13 ',
  },
  {
    day: moment(),
    punchIn: '09:08 AM',
    punchOut: '06:05 PM',
    totalHours: '08:13 ',
  },
  {
    day: moment(),
    punchIn: '09:08 AM',
    punchOut: '06:05 PM',
    totalHours: '08:13 ',
  },
  {
    day: moment(),
    punchIn: '09:08 AM',
    punchOut: '06:05 PM',
    totalHours: '08:13 ',
  },
  {
    day: moment(),
    punchIn: '09:08 AM',
    punchOut: '06:05 PM',
    totalHours: '08:13 ',
  },
  {
    day: moment(),
    punchIn: '09:08 AM',
    punchOut: '06:05 PM',
    totalHours: '08:13 ',
  },
  {
    day: moment(),
    punchIn: '09:08 AM',
    punchOut: '06:05 PM',
    totalHours: '08:13 ',
  },
  {
    day: moment(),
    punchIn: '09:08 AM',
    punchOut: '06:05 PM',
    totalHours: '08:13 ',
  },
  {
    day: moment(),
    punchIn: '09:08 AM',
    punchOut: '06:05 PM',
    totalHours: '08:13 ',
  },
  {
    day: moment(),
    punchIn: '09:08 AM',
    punchOut: '06:05 PM',
    totalHours: '08:13 ',
  },
];

const History = () => {
  const styles = useMakeStyle();
  return (
    <ImageBackground style={styles.wrapper} source={appImages.background}>
      <CustomView style={styles.wrapper}>
        <View style={styles.headerText}>
          <Text style={[fontStyleVariant[variant.F50022], styles.headerText]}>
            Attendance History
          </Text>
          <MenuIcon />
        </View>
        <View style={styles.calenderView}>
          <Calendar />
        </View>
      </CustomView>
    </ImageBackground>
  );
};

export default History;

const useMakeStyle = () =>
  StyleSheet.create({
    wrapper: {
      paddingTop: 8,
      flex: 1,
    },
    background: { backgroundColor: Colors.colorF9 },
    headerText: {
      shadowColor: Colors.borderColor,
      shadowOpacity: 0.3,
      shadowOffset: {
        height: 1,
        width: 1,
      },
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      paddingTop: 4,
    },
    calenderView: {
      flex: 1,
      backgroundColor: Colors.white,
      marginHorizontal: 8,
      paddingHorizontal: 3,
      paddingVertical: 8,
      paddingBottom: 12,
      borderRadius: 10,
      marginTop: 20,
    },
    headerWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 12,
    },
  });

import moment, { Moment } from 'moment';
import { Arrow } from '../../../assets/icon';
import responsive from '../../../utils/responsive';
import { deviceWidth } from '../../../../App';
import { MenuIcon } from '../../../assets/icon/Menu';
import { appImages } from '../../../assets/image';
import { CalenderView } from '../../../components/CalenderView';

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(moment());

  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

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

  const handlePrevMonth = () => {
    setCurrentMonth(currentMonth.clone().subtract(1, 'month'));
  };

  const handleNextMonth = () => {
    setCurrentMonth(currentMonth.clone().add(1, 'month'));
  };

  const renderDay = (day: Moment) => {
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
  };

  return (
    <>
      {/* Month Navigation */}
      <View style={styles.calenderDate}>
        <CalenderView />
      </View>
      <View style={styles.recordFlat}>
        <FlatList<PunchRecord>
          data={punchRecord}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.paddingB}
          renderItem={PunchRecord}
          keyExtractor={(_, index) => String(index * 80)}
        />
      </View>
    </>
  );
};

export const PunchRecord = ({ item }: { item: PunchRecord; index: number }) => {
  const date = moment(item.day);
  const dateFormat = date?.date() < 10 ? `0${date?.date()}` : date?.date();

  return (
    <View style={styles.recordWrapper}>
      <View style={styles.recordContainer}>
        <View style={styles.dateContainer}>
          <Text style={[fontStyleVariant[variant.F50019], styles.recordColor]}>
            {dateFormat}
          </Text>
          <Text
            style={[
              fontStyleVariant[variant.F30011],
              styles.recordColor,
              styles[500],
            ]}
          >
            {week[date?.day()]}
          </Text>
        </View>
        <View style={styles.padL}>
          <Text style={styles.timeStyle}>{item.punchIn}</Text>
          <Text style={fontStyleVariant[variant.F30011]}>{'Punch In'}</Text>
        </View>
        <View style={styles.padH10}>
          <Text style={styles.timeStyle}>{item.punchOut}</Text>
          <Text style={fontStyleVariant[variant.F30011]}>{'Punch Out'}</Text>
        </View>

        <View style={styles.padH10}>
          <Text style={styles.timeStyle}>{item.totalHours}</Text>
          <Text style={fontStyleVariant[variant.F30011]}>{'Total Hours'}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  calenderWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  navText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  monthText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
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
  calenderHeader: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 8,
  },
  arrowWrapper: { flexDirection: 'row', left: 10 },
  arrowLeft: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#F7F8FC',
    marginRight: responsive.width(4),
  },
  arrowRight: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#F7F8FC',
  },
  calenderDate: { marginRight: 10 },
  recordWrapper: {
    marginHorizontal: 6,
    marginVertical: 10,
    backgroundColor: Colors.colorF6,
    borderRadius: 12,
    shadowOpacity: 0.4,
    shadowColor: Colors.borderColor,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    elevation: 3,
  },
  recordContainer: {
    shadowColor: Colors.colorEF,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 3,
      width: 1,
    },
    flexDirection: 'row',
    padding: 12,
    paddingHorizontal: 14,
    alignItems: 'center',
  },
  dateContainer: {
    backgroundColor: Colors.color55,
    padding: 15,
    paddingHorizontal: 17,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: responsive.width(2.5),
  },
  day: { marginTop: 2 },
  padH10: { paddingHorizontal: 10 },
  padL: { paddingLeft: 12, paddingHorizontal: 10 },
  textAlign: { textAlign: 'center', paddingVertical: 4 },
  timeStyle: {
    ...fontStyleVariant[variant.F30012],
    color: Colors.grey46,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  recordColor: { color: Colors.white },
  500: { fontWeight: '500' },
  recordFlat: {
    marginTop: 10,
    flex: 1,
  },
  paddingB: { paddingBottom: 80 },
});
