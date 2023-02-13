import {
  Alert,
  Dimensions,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useEffect, useMemo, useState} from 'react';
import {fillStyles, styles} from './styles';
import {Colors, type} from '../../../constant';
import {firebase} from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {CrossIcon, Right} from '../../../assets/icon';
import MainStack from '../../../routes/MainStack';
import {GlobalData} from '../../../context/CommonContext';
import {F50015} from '../../../styling/FontStyle';
import {TurnOff} from '../../../assets/icon/TurnOff';
import {LoadingIndicator, SkipQuestion} from '../../../components';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../routes/RoutesName/RoutesName';
import {AlertPopup} from './AlertPopup';

export const LandingScreen = () => {
  const cacheStyles = useMemo(() => styles, []);
  /**
   * get data from context loading question questionindex
   */

  const {
    rootStore: {
      question: {
        qLoading = false,
        questionData = [],
        questionIndex = 0,
        fillQuestion = [],
        confirmSubmit = false,
      },
      navigation = () => {},
      dispatchQuestion,
    },
  }: object | any = useContext(GlobalData);

  let {
    answer = '',
    question_points = [],
    quiz = '',
  } = questionData[questionIndex] || questionData;
  console.log('questionData[questionIndex]', questionData[questionIndex]);

  /**
   * get data from firebase QUESTION_BANK Collection
   */
  useEffect(() => {
    dispatchQuestion({types: type.QUESTION_LOADING});
    firebase
      .firestore()
      .collection('QUESTION_BANK')
      .get()
      .then((res: any) => {
        const arrangeDocument = res?._docs?.map((doc: any) => doc?._data);
        dispatchQuestion({
          types: type.QUESTION_DATA,
          payload: {qData: arrangeDocument},
        });
      })
      .catch(erre => {
        console.log(erre);
      });
  }, []);

  /**
   * Final Submit Answer function this function describe point's and correct answer
   */
  const onFinalSumbitingPaper = () => {
    let point = 0;
    questionData?.map((result: any) => {
      result?.question_points?.map((item: any) => {
        item?.isSelected && item?.correctAnswer ? (point += 10) : null;
      });
    });
    navigation?.navigate(ROUTES.Result, {
      rewardPoint: point,
      questionData: questionData,
    });
  };

  /**
   *
   * @param _id // describe index whick shoul'd toggle answer
   *
   */
  const onSelectedOption = (_id: string) => {
    const userSelectOption = question_points?.map((result: any) =>
      result?.id == _id
        ? {...result, isSelected: true}
        : {...result, isSelected: false},
    );
    questionData[questionIndex] = {
      ...questionData[questionIndex],
      question_points: userSelectOption,
    };
    dispatchQuestion({
      types: type.ON_SELECTOPTION,
      payload: [...questionData],
    });
  };

  /**
   * This onSubmitAnswer function describe user confirem select this option
   */
  const onSubmitAnswer = () => {
    const submitAnswer = question_points?.some(
      (result: any) => result?.isSelected,
    );

    if (submitAnswer) {
      const finalSubmit = question_points?.map(
        (finalRes: {question_options: string; isSelected: boolean}) => {
          let {question_options, isSelected}: any = finalRes;
          return answer == question_options
            ? {...finalRes, correctAnswer: true}
            : isSelected
            ? {...finalRes, correctAnswer: false}
            : finalRes;
        },
      );

      questionData[questionIndex] = {
        ...questionData[questionIndex],
        question_points: finalSubmit,
      };

      !fillQuestion[questionIndex]?.isSubmitedAnswer &&
        (fillQuestion[questionIndex] = {isSubmitedAnswer: true});
      let checkSubmitedAnswer = fillQuestion?.filter(
        (result: any) => !result?.isSubmitedAnswer,
      );

      dispatchQuestion({
        types: type.INCREASE_INDEX,
        payload: {
          finalAnswer: questionData,
          index:
            questionIndex !== questionData?.length - 1 && !confirmSubmit
              ? questionIndex + 1
              : questionIndex,
          submited: fillQuestion,
          confirmSubmit: checkSubmitedAnswer?.length > 0 ? false : true,
        },
      });
      if (confirmSubmit) {
        AlertPopup(onFinalSumbitingPaper);
      }
    } else {
      dispatchQuestion({
        types: type.JUMP_INDEX,
        payload:
          questionIndex === questionData?.length - 1
            ? questionIndex
            : questionIndex + 1,
      });
    }
  };

  /**
   * 
   * @param index number  jumpQuestion function describe user select particular question direct jump this question
   */
  const jumpQuestion = (index: number) => {
    dispatchQuestion({
      types: type.JUMP_INDEX,
      payload: index,
    });
  };

  return (
    <>
      {qLoading ? (
        <LoadingIndicator size={50} color={Colors.semiGrey} />
      ) : (
        <View style={cacheStyles.main}>
          <StatusBar backgroundColor={Colors.heavyDark} />
          <SafeAreaView style={cacheStyles.safeAreView} />
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={cacheStyles.scrollContain}>
            <View style={cacheStyles.wrapper}>
              <View style={cacheStyles.categoryTitle}>
                <Text style={[F50015.main, F50015.textColor]}>
                  Din Islam Quiz
                </Text>
              </View>
              <View style={cacheStyles.questionWrapper}>
                <Text style={cacheStyles.question}>{`Question`}</Text>
                <Text
                  style={{
                    left: 12,
                    color: Colors.white,
                    fontSize: 22,
                    fontWeight: '800',
                  }}>
                  {`${questionIndex}/${questionData?.length - 1}`}
                </Text>
              </View>
              <SkipQuestion
                fillQuestion={fillQuestion}
                styles={cacheStyles}
                questionIndex={questionIndex}
                onPress={jumpQuestion}
              />
              <View style={cacheStyles.quizQuestion}>
                <Text
                  style={{
                    color: Colors.white,
                    fontSize: 20,
                    fontWeight: '500',
                  }}>
                  {quiz}
                </Text>
              </View>
              <View style={cacheStyles.optionWrapper}>
                {question_points?.length > 0 &&
                  question_points?.map((res: any, index: number) => {
                    let {isSelected, question_options}: boolean | any = res;
                    return (
                      <Pressable
                        onPress={() => onSelectedOption(res?.id, index)}
                        key={index.toString()}
                        style={[
                          cacheStyles.option,
                          {borderColor: isSelected ? 'green' : 'grey'},
                        ]}>
                        <Text
                          style={{
                            color: isSelected ? Colors.semiGreen : '#F6F6F6',
                          }}>
                          {question_options}
                        </Text>
                        <View style={cacheStyles.selectedIcon}>
                          {isSelected && <Right />}
                        </View>
                      </Pressable>
                    );
                  })}
              </View>

              <View style={[cacheStyles.bottomButton]}>
                <TouchableOpacity style={cacheStyles.quit}>
                  <TurnOff />
                  <Text style={{color: Colors.snowGrey, paddingLeft: 12}}>
                    Quit
                  </Text>
                </TouchableOpacity>
                <Pressable
                  onPress={() => onSubmitAnswer()}
                  style={[cacheStyles.next]}>
                  <Text style={{color: Colors.white}}>
                    {confirmSubmit ? 'Submit quiz' : 'Next'}
                  </Text>
                </Pressable>
              </View>
            </View>
          </ScrollView>
        </View>
      )}
    </>
  );
};

{
  /* <View
            style={{
              flex: 0.4,
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
              }}
            />
                <View
            style={{
              marginHorizontal: 20,
              // position: 'absolute',
              top: Dimensions.get('screen').height / 5,
              // width: Dimensions.get('screen').width / 1.12,
              // flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: Colors.white,
              borderRadius: 15,
              shadowRadius: 12,
              shadowColor: '#808080',
              shadowOpacity: 0.5,
              shadowOffset: {height: 10},
              // height: Dimensions.get('screen').height / 4,
            }}>
            <View
              style={{
                backgroundColor: Colors.Orange,
                height: 60,
                width: 60,
                borderRadius: 30,
              }} />
            <Text
              style={{
                textAlign: 'center',
                color: '#FFC3CA',
                opacity: 1,
                fontSize: 19,
                marginTop: 12,
              }}>
              {`Question ${questionIndex}/${questionData?.length}`}
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
                {quiz}
              </Text>
            </View>
          </View>
          </View> */
}

{
  /* <View style={{flex: 0.7,marginTop:100, marginHorizontal: 40}}>
            {question_points?.length > 0 &&
              question_points?.map((res: any, index: number) => {
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
          </View> */
}

{
  /* <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              style={{marginTop: 25}}>
              {u.map((result: number | string | any) => {
                return (
                  <View
                    style={{
                      marginHorizontal: 12,
                      height: 2,
                      borderRadius: 12,
                      width: 13,
                      backgroundColor: 'red',
                    }}></View>
                );
              })}
            </ScrollView> */
}
//   const question = {
//     quiz: "How Was You'r day",
//     answer: "Very Good",
//     question_points: [
//       {
//         id: 1,
//         isSelected: false,
//         question_options: "Good",
//       },
//       {
//         id: 2,
//         isSelected: false,
//         question_options: "Very Good",
//       },
//       {
//         id: 3,
//         isSelected: false,
//         question_options: "Fine",
//       },
//       {
//         id: 4,
//         isSelected: false,
//         question_options: "Mood",
//       },
//     ],
//   }

// const onNext=()=>{
//   firebase
//       .firestore()
//       .collection('QUESTION_BANK')
//       .add({ ...question })
// }
// const skipQuestion = useMemo(() => {
//   return (
//     <ScrollView
//       showsHorizontalScrollIndicator={false}
//       horizontal={true}
//       style={cacheStyles.fillScroll}>
//       {fillQuestion?.length > 0 &&
//         fillQuestion?.map((result: number | string | any, index: number) => {
//           console.log('result', result);

//           return (
//             <View style={styles.fillQuestionWrapper}>
//               <View
//                 style={[
//                   styles.fillQuestionView,
//                   fillStyles(
//                     questionIndex,
//                     index,
//                     result?.isSubmitedAnswer,
//                     questionData,
//                   ),
//                 ]}
//               />
//               <TouchableOpacity
//                 onPress={() => jumpQuestion(index)}
//                 key={result?.toString()}
//                 activeOpacity={0.8}
//                 style={styles.number}>
//                 <Text style={{color: Colors.semiBlue}}>{index}</Text>
//               </TouchableOpacity>
//             </View>
//           );
//         })}
//     </ScrollView>
//   );
// }, [fillQuestion, questionIndex]);
/**
 * 
 * const onFinalSumbitingPaper = () => {
    let score = {point: 0, correctedAnswer: {}, falseAnswer: {}};
    questionData?.map((result: any) => {
      result?.question_points?.map((item: any, index: number) => {
        item?.isSelected && item?.correctAnswer
          ? ((score['point'] = score?.point + 10),
            (score['correctedAnswer'] = {
              ...score['correctedAnswer'],
              [index]: {item},
            }))
          : item?.isSelected
          ? (score['falseAnswer'] = {...score['falseAnswer'], [index]: item})
          : null;
      });
    });
    console.log('point', score);
  };
 */
