import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext} from 'react';
import {Colors} from '../../../constant';
import {GlobalData} from '../../../context/CommonContext';
import {navigationRoute} from '../../../services';
import {ROUTES} from '../../../routes/RoutesName/RoutesName';

const quizCategories = [
  {
    id: 1,
    name: 'Akhlak',
  },
  {
    id: 2,
    name: 'Tarikh',
  },
  {
    id: 3,
    name: 'Fikah',
  },
  {
    id: 4,
    name: 'Quran',
  },
  {
    id: 5,
    name: 'All',
  },
  {
    id: 6,
    name: 'GuljareIbadat',
  },
  {
    id: 7,
    name: 'Genral',
  },
];

export const HomeScreen = () => {
  const {
    rootStore: {navigation = () => {}},
  }: object | any = useContext(GlobalData);

  return (
    <>
      <StatusBar backgroundColor={Colors.white} />
      <SafeAreaView style={{backgroundColor: Colors.heavyGray}} />
      <View style={{flex: 1, backgroundColor: Colors.snowWhite}}>
        <ScrollView
          style={{flex: 1}}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 80}}>
          <View
            style={{
              flex: 0.4,
              backgroundColor: Colors.heavyGray,
              height: Dimensions.get('screen').height / 3,
              borderBottomEndRadius: 20,
              borderBottomStartRadius: 20,
              paddingTop: 12,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <View
                style={{
                  backgroundColor: 'white',
                  height: 60,
                  width: 60,
                  marginLeft: 15,
                  borderRadius: 30,
                }}></View>
              <Text style={{color: 'white', paddingLeft: 14}}>
                Mehandi Hasan
              </Text>
            </View>
            <View
              style={{
                padding: 12,
                marginTop: Dimensions.get('screen').height / 14,
                marginHorizontal: Dimensions.get('screen').width / 19,
                borderRadius: 14,
                backgroundColor: Colors.placeHolderTextBlack,
                height: Dimensions.get('screen').height / 3.5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: Colors.white}}>
                A quiz contains a multiple-choice question
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              marginHorizontal: 16,
              marginTop: Dimensions.get('screen').height / 4.7,
            }}>
            <Text>Quiz Categories</Text>
          </View>
          <View
            style={{
              flex: 1,
              marginTop: 15,
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {quizCategories?.map(
              (_itemCategory: {name: string; id: number}, _index: number) => {
                return (
                  <TouchableOpacity
                    onPress={() => navigation.navigate(ROUTES.ResultStack)}
                    key={_index.toString()}
                    style={{
                      height: Dimensions.get('screen').height / 6,
                      width: Dimensions.get('screen').width / 4,
                      backgroundColor: Colors.white,
                      borderRadius: 12,
                      marginVertical: 12,
                      marginHorizontal: 12,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{}}>{_itemCategory.name}</Text>
                  </TouchableOpacity>
                );
              },
            )}
          </View>
        </ScrollView>
      </View>
    </>
  );
};
