import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {CustomView} from '../../../components/CoreComponent';
import {Colors, fontStyleVariant, variant} from '../../../utils';

const History = () => {
  const styles = useMakeStyle();
  return (
    <CustomView style={styles.wrapper}>
      <Text style={[fontStyleVariant[variant.F50022], styles.headerText]}>
        Attendance History
      </Text>
      <Calendar />
    </CustomView>
  );
};

export default History;

const useMakeStyle = () =>
  StyleSheet.create({
    wrapper: {
      paddingTop: 8,
    },
    headerText: {
      shadowColor: Colors.borderColor,
      shadowOpacity: 0.5,
      shadowOffset: {
        height: 3,
        width: 1,
      },
    },
  });

import moment, {Moment} from 'moment';
import {Arrow} from '../../../assets/icon';
import responsive from '../../../utils/responsive';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(moment());
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
    const isCurrentMonth = day.isSame(currentMonth, 'month');
    const isSelected = day.isSame(selectedDate, 'day');

    return (
      <></>
      // <TouchableOpacity
      //   style={[
      //     styles.dayContainer,
      //     {backgroundColor: isSelected ? '#FFD700' : '#fff'},
      //   ]}
      //   onPress={() => setSelectedDate(day)}>
      //   <Text
      //     style={[styles.dayText, {color: isCurrentMonth ? '#000' : '#999'}]}>
      //     {day.format('D')}
      //   </Text>
      // </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Month Navigation */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={fontStyleVariant[variant.F50015]}>
          {currentMonth.format('MMMM YYYY')}
        </Text>
        <View
          style={{
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'flex-end',
            backgroundColor:"pink"
          }}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                height: 30,
                width: 30,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
                backgroundColor: '#F7F8FC',
                marginRight: responsive.width(3),
              }}>
              <Arrow left />
            </View>
            <View
              style={{
                height: 30,
                width: 30,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
                backgroundColor: '#F7F8FC',
              }}>
              <Arrow />
            </View>
          </View>
        </View>
      </View>

      {/* Days of Week */}
      <View style={styles.weekdays}>
        {daysOfWeek.map(day => (
          <Text key={day} style={styles.weekdayText}>
            {day}
          </Text>
        ))}
      </View>

      {/* Days of Month */}
      <FlatList
        data={generateDays()}
        renderItem={({item}) => renderDay(item)}
        keyExtractor={item => item.format('DD-MM-YYYY')}
        numColumns={7}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
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
    justifyContent: 'space-between',
  },
  weekdayText: {
    // flex: 1,
    textAlign: 'center',
    fontWeight: '400',
    paddingVertical: 16,
    color: Colors.color2C,
  },
  dayContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    borderRadius: 5,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  dayText: {
    fontSize: 16,
  },
});
