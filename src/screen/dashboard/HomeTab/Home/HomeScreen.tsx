import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../../../constant';
import {HomeScreenProps} from '../export';

const HomeScreen = (homeScreenProps: HomeScreenProps) => {
  const {navigation, route} = homeScreenProps;
  return (
    <View style={{flex: 1, backgroundColor: Colors.white}}>
      <SafeAreaView style={{backgroundColor: Colors.white}} />
      <Text onPress={() => navigation.navigate('HomeScreen')}>HomeScreen</Text>
    </View>
  );
};
export default HomeScreen;
