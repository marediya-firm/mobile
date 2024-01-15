import React = require('react');
import {SafeAreaView, Text, View} from 'react-native';
import {useEffect} from 'react';
import {Colors} from '../../../../constant';
import {CategoryAPIResponse, HomeScreenProps} from '../export';
import {HttpRequest} from '../../../../https/HttpsService';

const HomeScreen = (homeScreenProps: HomeScreenProps) => {
  const {navigation, route} = homeScreenProps;
  useEffect(() => {
    (async () => {
      const result = await HttpRequest.clientGetRequest<CategoryAPIResponse[]>({
        endPoint: HttpRequest.apiEndPoint.getCategory,
      });
    })();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: Colors.white}}>
      <SafeAreaView style={{backgroundColor: Colors.white}} />
      <Text onPress={() => navigation.navigate('HomeScreen')}>HomeScreen</Text>
    </View>
  );
};
export default HomeScreen;
