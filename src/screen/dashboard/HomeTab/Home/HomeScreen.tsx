import {SafeAreaView, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Colors} from '../../../../constant';
import {HomeScreenProps} from '../export';
import {UserLocalStorage, UserPrivateKey} from '../../../../services/export';
import {LoginAPIResponse} from '../../../auth/Login/export';

const HomeScreen = (homeScreenProps: HomeScreenProps) => {
  const {navigation, route} = homeScreenProps;
  useEffect(() => {
    (async () => {
      const result = await UserLocalStorage.getValue<LoginAPIResponse['data']>(
        UserPrivateKey.UserDetail,
      );
      console.log('result++++++', result);
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
