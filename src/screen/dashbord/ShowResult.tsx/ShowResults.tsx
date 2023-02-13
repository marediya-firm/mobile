import {
  Dimensions,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useContext} from 'react';
import {useRoute} from '@react-navigation/native';
import {marginTop} from '../../auth/CreateAccount/styles';
import {Colors} from '../../../constant';
import {Back} from '../../../assets/icon';
import {GlobalData} from '../../../context/CommonContext';

export const ShowResults = () => {
  const route = useRoute();
  const {params}: any | Array<object> = route;

  const {
    rootStore: {navigation},
  }: object | any = useContext(GlobalData);

  return (
    <View style={{flex: 1, marginHorizontal: 16}}>
      <StatusBar backgroundColor={Colors.heavyDark} />
      <SafeAreaView />
      <View
        style={{
          alignItems: 'center',
          ...marginTop(12),
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <Pressable onPress={() => navigation.goBack()}>
          <Back />
        </Pressable>
        <Text style={{color: 'white', fontSize: 20}}>Check Answer</Text>
        <View style={{height: 24, width: 24}} />
      </View>
      <Text
        style={{textAlign: 'right', color: Colors.semiGreen, ...marginTop(30)}}>
        {`Corrected Answer ${params?.rewardPoint}`}
      </Text>
      <ScrollView showsVerticalScrollIndicator={false} style={marginTop('10%')}>
        {params?.result?.map((result: any, index: number) => {
          const {quiz, question_points} = result;
          return (
            <View
              key={index.toString()}
              style={{
                marginVertical: 10,
                borderRadius: 10,
                paddingHorizontal: 15,
                paddingVertical: 12,
                backgroundColor: Colors.snowWhite,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text numberOfLines={1} style={{color: 'black', fontSize: 12}}>
                  {index + '.'}
                </Text>
                <Text style={{color: 'black', fontSize: 15, left: 14}}>
                  {quiz}
                </Text>
              </View>
              <View style={{...marginTop(8)}}>
                {question_points?.map((itemCorrect: any, indexing: number) => {
                  const {isSelected, correctAnswer, question_options} =
                    itemCorrect;
                  return (
                    <View
                      key={indexing?.toString()}
                      style={{
                        paddingHorizontal: 22,
                      }}>
                      {isSelected && correctAnswer ? (
                        <Text style={{color: Colors.darkGreen, fontSize: 15}}>
                          {`Answer : ${question_options}`}
                        </Text>
                      ) : correctAnswer ? (
                        <Text
                          style={{
                            color: 'red',
                            fontSize: 15,
                            ...marginTop(5),
                          }}>
                          {`Selected Answer : ${question_options}`}
                        </Text>
                      ) : (
                        isSelected &&
                        !correctAnswer && (
                          <Text
                            style={{
                              color: Colors.darkGreen,
                              fontSize: 15,
                              ...marginTop(12),
                            }}>
                            {`Correct Answer : ${question_options}`}
                          </Text>
                        )
                      )}
                    </View>
                  );
                })}
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
