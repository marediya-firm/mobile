import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useEffect, useMemo} from 'react';
import {styles} from './styles';
import {Colors, strings, type} from '../../../constant';
import {Back} from '../../../assets/icon';
import {GlobalData} from '../../../context/CommonContext';
import {F50015, F50020, F80022} from '../../../styling/FontStyle';
import {TurnOff} from '../../../assets/icon/TurnOff';
import {LoadingIndicator, SkipQuestion} from '../../../components';
import {ROUTES} from '../../../routes/RoutesName/RoutesName';
import {AlertPopup} from './AlertPopup';
import {firebase} from '@react-native-firebase/firestore';
import {QuizOption} from './components/QuizOption';

export const LandingScreen = () => {
  const cacheStyles = useMemo(() => styles, []);
  const {Quit, SubmitQuiz, next, QuizTitle} = useMemo(() => strings, []);

  /**
   * get data from context loading question question index
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
    // navigation.reset({
    //   index: 1,
    //   routes: [
    //     {
    //       name: ROUTES.Result,
    //       params: {
    //         rewardPoint: point,
    //         questionData: questionData,
    //       },
    //     },
    //   ],
    // });
    navigation.navigate(ROUTES.Result, {
      rewardPoint: point,
      questionData: questionData,
    });
  };

  /**
   *
   * @param _id // describe index which should toggle answer
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
   * This onSubmitAnswer function describe user confirm select this option
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

      const nextMoveToQuestion = fillQuestion?.findIndex(
        (result: any, index: number) => {
          if (index > questionIndex && !result?.isSubmitedAnswer) {
            return !result?.isSubmitedAnswer;
          }
        },
      );

      dispatchQuestion({
        types: type.INCREASE_INDEX,
        payload: {
          finalAnswer: questionData,
          index:
            questionIndex !== questionData?.length - 1 && !confirmSubmit
              ? nextMoveToQuestion || questionIndex
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

  const previousQuestion = () => {
    if (questionIndex > 0) {
      dispatchQuestion({
        types: type.JUMP_INDEX,
        payload: questionIndex - 1,
      });
    }
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
            contentInsetAdjustmentBehavior={strings.automatic}
            contentContainerStyle={cacheStyles.scrollContain}>
            <View style={cacheStyles.wrapper}>
              <View style={cacheStyles.categoryTitle}>
                <Text style={[F50015.main, F50015.textColor]}>{QuizTitle}</Text>
              </View>

              <View style={cacheStyles.questionWrapper}>
                <Text style={cacheStyles.question}>{strings.Question}</Text>
                <Text style={F80022.main}>
                  {`${questionIndex}/${questionData?.length - 1}`}
                </Text>
              </View>

              <SkipQuestion
                fillQuestion={fillQuestion}
                styles={cacheStyles}
                questionIndex={questionIndex}
                onPress={jumpQuestion}
              />

              <View style={[cacheStyles.quizQuestion]}>
                <Pressable onPress={() => previousQuestion()}>
                  <Back />
                </Pressable>
                <View style={cacheStyles.flex}>
                  <Text style={F50020.main}>{quiz}</Text>
                </View>
              </View>

              <QuizOption
                onSelectedOption={onSelectedOption}
                question_points={question_points}
                cacheStyles={cacheStyles}
              />

              <View style={[cacheStyles.bottomButton]}>
                <TouchableOpacity style={cacheStyles.quit}>
                  <TurnOff />
                  <Text style={cacheStyles.quitText}>{Quit}</Text>
                </TouchableOpacity>

                <Pressable
                  onPress={() => onSubmitAnswer()}
                  style={[cacheStyles.next]}>
                  <Text style={{color: Colors.white}}>
                    {confirmSubmit ? SubmitQuiz : next}
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
