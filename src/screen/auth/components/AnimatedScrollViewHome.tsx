import React, {ReactElement, useCallback, useState} from 'react';
import {MutableRefObject} from 'react';
import {ScrollView, StyleSheet, Dimensions, View} from 'react-native';
import {Colors, StringConstant} from '../../../constant';
import Animated, {
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {CustomText, ScrollWatchRef} from '../../../components/export';
import {fontStyleVariant, variant} from '../../../utils';

type AnimatedScrollViewHomePros = {
  appString: StringConstant;
  children?: React.ReactNode | any;
  scrollWatchRef: MutableRefObject<ScrollWatchRef>;
};

export const AnimatedScrollViewHome = (props: AnimatedScrollViewHomePros) => {
  const {appString, children, scrollWatchRef} = props;

  const [header, setHeader] = useState<StringConstant['FoodType' | 'Popular']>(
    appString.FoodType,
  );

  const animationHeader = (
    type: StringConstant['FoodType' | 'Popular'],
  ): void => {
    if (type === header) return;
    setHeader(type);
  };

  const foodTypeOpacity = useSharedValue<number>(1);
  const popularOpacity = useSharedValue<number>(0.2);

  const foodStyle = useAnimatedStyle(() => {
    return {
      opacity: withSpring(foodTypeOpacity?.value),
      color: Colors.darkBlack,
    };
  });
  console.log('foodStyle', foodStyle.color);

  const popularStyle = useAnimatedStyle(() => {
    return {
      opacity: withSpring(popularOpacity.value), // Apply spring animation to opacity
    };
  });

  const AnimatedCustomText = (
    <CustomText
      key={appString.Popular}
      isAnimated
      extraStyle={popularStyle}
      text={header === appString.FoodType ? appString.Popular : ''}
      variant={variant.F50019}
    />
  );

  // !Add new children in popular header for optimization
  // if (
  //   children[1]?.props?.children &&
  //   !children[1]?.props?.children?.[0]?.props?.text
  // ) {
  //   children[1].props.children = [children[1].props.children];
  //   children[1].props.children = [
  //     AnimatedCustomText,
  //     ...children[1]?.props?.children,
  //   ];
  // }

  return (
    <React.Fragment>
      <Animated.Text style={[fontStyleVariant[variant.F50019], foodStyle]}>
        {header}
      </Animated.Text>
      <ScrollView
        onScroll={({nativeEvent}) => {
          const yOffset = nativeEvent.contentOffset.y;
          const {current} = scrollWatchRef;

          if (current.offset + 25 > yOffset) {
            animationHeader(appString.FoodType);
          }

          foodTypeOpacity.value = withTiming(1 - Math.abs(yOffset) / 180, {
            duration: 10,
            reduceMotion: ReduceMotion.System,
          });

          const newOpacity = yOffset / 100 > 0.5 ? yOffset / 100 : 0.5;
          popularOpacity.value = withTiming(newOpacity, {
            duration: 10,
            reduceMotion: ReduceMotion.System,
          });

          if (yOffset > current.height + 35) {
            if (header !== appString.Popular) {
              animationHeader(appString.Popular);
              foodTypeOpacity.value = withTiming(1, {
                duration: 10,
                reduceMotion: ReduceMotion.System,
              });
            }
          }
          current.offset = yOffset;
        }}
        style={componentStyle.scrollBorder}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={300}
        contentContainerStyle={componentStyle.contentContainerStyle}>
        {children}
      </ScrollView>
    </React.Fragment>
  );
};

const componentStyle = StyleSheet.create({
  contentContainerStyle: {
    paddingBottom: Dimensions.get('screen').height / 2,
  },
  scrollBorder: {
    borderRadius: 20,
  },
});
