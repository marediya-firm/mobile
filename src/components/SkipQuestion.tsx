import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {memo} from 'react';
import {fillStyles} from '../screen/dashbord/LandingBoard';
import {Colors} from '../constant';

const SkipQuestion = memo(
  ({fillQuestion, styles, questionIndex, onPress}: any) => {
    return (
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={styles.fillScroll}>
        {fillQuestion?.length > 0 &&
          fillQuestion?.map((result: number | string | any, index: number) => {
            return (
              <View key={index?.toString()} style={styles.fillQuestionWrapper}>
                <View
                  style={[
                    styles.fillQuestionView,
                    fillStyles(
                      questionIndex,
                      index,
                      result?.isSubmitedAnswer,
                      // questionData,
                    ),
                  ]}
                />
                <TouchableOpacity
                  onPress={() => onPress(index)}
                  key={result?.toString()}
                  activeOpacity={0.8}
                  style={styles.number}>
                  <Text style={{color: Colors.semiBlue}}>{index}</Text>
                </TouchableOpacity>
              </View>
            );
          })}
      </ScrollView>
    );
  },
);

export {SkipQuestion};
