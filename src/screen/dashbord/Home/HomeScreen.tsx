import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../../constant';

export const HomeScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: Colors.white}}>
      <SafeAreaView style={{backgroundColor: Colors.white}} />
      <Text>HomeScreen</Text>
    </View>
  );
};
