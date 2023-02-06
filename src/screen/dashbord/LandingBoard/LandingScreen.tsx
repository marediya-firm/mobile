import {
  Alert,
  Dimensions,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import {styles} from './styles';
import {Colors} from '../../../constant';
import {firebase} from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {CrossIcon, Right} from '../../../assets/icon';
import MainStack from '../../../routes/MainStack';

export const LandingScreen = () => {
  const cacheStyles = useMemo(() => styles, []);
  let [question, setQuestion]: any = useState({});
  useEffect(() => {
    const userId = auth()?.currentUser?.uid;
    console.log('userId>>>>>', userId);
    firebase
      .firestore()
      .collection('QUESTION_BANK')
      .get()
      .then((res: any) => {
        setQuestion(res?._docs[0]?._data);
      })
      .catch(erre => {
        console.log(erre);
      });
  }, []);

  const onSelectedOption = (_id: string, index: number) => {
    const question_points = question?.question_points?.map((result: any) =>
      result?.id == _id
        ? {...result, isSelected: true}
        : {...result, isSelected: false},
    );
    question = {...question, question_points};
    setQuestion(question);
  };

  const onSubmitAnswer = () => {
    const submitAnswer = question?.question_points?.filter(
      (result: any) => result?.isSelected,
    );
    if (submitAnswer?.length > 0) {
      const finalSubmit = question?.question_points?.map((finalRes: any) => {
        if (
          question?.answer == finalRes?.question_options &&
          submitAnswer[0]?.question_options == question?.answer
        ) {
          return {...finalRes, correctAnswer: true};
        } else if (
          finalRes?.question_options === submitAnswer[0]?.question_options
        ) {
          return {...finalRes, correctAnswer: false};
        } else if (question?.answer === finalRes?.question_options) {
          return {...finalRes, correctAnswer: true};
        } else {
          return {...finalRes};
        }
      });
      question.question_points = finalSubmit;
      setQuestion({...question});
    } else return;
  };
  console.log(">>>",question)

  return (
    <>
      <SafeAreaView style={cacheStyles.safeAreView} />
      <View style={cacheStyles.main}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={{flex: 1}}>
          <View
            style={{
              flex: 0.3,
              backgroundColor: '#FFC0CB',
              borderBottomLeftRadius: 40,
              borderBottomRightRadius: 40,
            }}>
            <View
              style={{
                backgroundColor: Colors.white,
                height: 60,
                width: 60,
                position: 'absolute',
                right: 15,
                borderRadius: 30,
              }}></View>
            <View
              style={{
                marginHorizontal: 20,
                position: 'absolute',
                top: Dimensions.get('screen').height / 6,
                width: Dimensions.get('screen').width / 1.12,
                flex: 1,
                backgroundColor: Colors.white,
                borderRadius: 15,
                shadowRadius: 12,
                shadowColor: '#808080',
                shadowOpacity: 0.5,
                shadowOffset: {height: 10},
                height: Dimensions.get('screen').height / 5.5,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#FFC3CA',
                  opacity: 1,
                  fontSize: 19,
                }}>
                Question 14/20
              </Text>
              <View style={{marginTop: 20}}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 22,
                    color: Colors.grey,
                    opacity: 0.8,
                    fontWeight: '700',
                  }}>
                  {question?.question}
                </Text>
              </View>
            </View>
          </View>

          <View style={{flex: 0.4, top: 90, marginHorizontal: 40}}>
            {question?.question_points?.length > 0 &&
              question?.question_points?.map((res: any, index: number) => {
                return (
                  <Pressable
                    onPress={() => onSelectedOption(res?.id, index)}
                    key={index.toString()}
                    style={{
                      height: 45,
                      borderWidth: 1,
                      paddingHorizontal: 20,
                      borderColor: res?.isSelected ? 'purple' : 'grey',
                      marginVertical: 12,
                      borderRadius: 12,
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexDirection: 'row',
                    }}>
                    <Text>{res?.question_options}</Text>
                    <View
                      style={{
                        height: 20,
                        alignSelf: 'center',
                        width: 20,
                        borderRadius: 10,
                        borderColor: 'grey',
                        borderWidth: 1,
                      }}>
                      {res?.isSelected && <Right />}
                      {res?.correctAnswer && <CrossIcon />}
                    </View>
                  </Pressable>
                );
              })}
            <Pressable
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: 20,
                marginTop: 30,
                borderRadius: 10,
                backgroundColor: 'orange',
                bottom: 12,
              }}
              onPress={() => onSubmitAnswer()}>
              <Text style={{color: 'white'}}>Submit</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </>
  );
};
