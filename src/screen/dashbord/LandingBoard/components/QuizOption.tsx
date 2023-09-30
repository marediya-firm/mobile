import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import React, {useMemo} from 'react';
import {Colors, conditionStyles, strings} from '../../../../constant';
import {Right} from '../../../../assets/icon';
interface props {
  cacheStyles: StyleProp<ViewStyle | PressableProps> | any;
  question_points: Array<object>;
  onSelectedOption: (item: any) => {} | any | void;
}

export const QuizOption = (props: props) => {
  const {cacheStyles, question_points, onSelectedOption} = props;
  const {BRCL, green, grey, CL} = useMemo(() => strings, []);

  return (
    <View style={cacheStyles.optionWrapper}>
      {question_points?.length > 0 &&
        question_points?.map((res: any, index: number) => {
          let {isSelected, question_options}: boolean | any = res;
          return (
            <Pressable
              onPress={() => onSelectedOption(res?.id)}
              key={index.toString()}
              style={[
                cacheStyles.option,
                conditionStyles(BRCL, isSelected ? green : grey),
              ]}>
              <Text
                style={conditionStyles(
                  CL,
                  isSelected ? Colors.semiGreen : Colors.semiBright,
                )}>
                {question_options}
              </Text>
              <View style={cacheStyles.selectedIcon}>
                {isSelected && <Right />}
              </View>
            </Pressable>
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({});
