import React, { useState } from 'react';
import { MutableRefObject } from 'react';
import { ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Colors, StringConstant } from '../../../constant';
import Animated, {
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { ScrollWatchRef } from '../../../components/export';
import { fontStyleVariant, variant } from '../../../utils';

type AnimatedScrollViewHomePros = {
  appString: StringConstant;
  children?: React.ReactNode;
  scrollWatchRef: MutableRefObject<ScrollWatchRef>;
};

export const AnimatedScrollViewHome = (props: AnimatedScrollViewHomePros) => {
  const { appString, children, scrollWatchRef } = props;

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

  return (
    <React.Fragment>
      <Animated.Text style={[fontStyleVariant[variant.F50019], foodStyle]}>
        {header}
      </Animated.Text>
      <ScrollView
        onScroll={({ nativeEvent }) => {
          const yOffset = nativeEvent.contentOffset.y;
          const { current } = scrollWatchRef;

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
        contentContainerStyle={componentStyle.contentContainerStyle}
      >
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
