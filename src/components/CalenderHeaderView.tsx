import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { Arrow } from '../assets/icon';
import { fontStyleVariant, variant } from '../utils';

export const CalenderHeaderView = () => {
  return (
    <View style={styles.calenderWrapper}>
      <Text style={fontStyleVariant[variant.F50015]}>
        {currentMonth.format('MMMM YYYY')}
      </Text>
      <View style={styles.calenderHeader}>
        <View style={styles.arrowWrapper}>
          <Pressable onPress={() => handlePrevMonth()} style={styles.arrowLeft}>
            <Arrow left />
          </Pressable>
          <Pressable
            onPress={() => handleNextMonth()}
            style={styles.arrowRight}>
            <Arrow />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
