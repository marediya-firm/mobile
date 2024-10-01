import React, {FC} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import ActionSheet, {SheetProps} from 'react-native-actions-sheet';
import responsive from '../../utils/responsive';
import {Colors} from '../../constant';
import {SwipeRight} from '../../assets/icon/SwipeRight';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const PunchSwipe: FC<Required<SheetProps<'punch-swipe-sheet'>>> = ({
  sheetId,
  payload,
}) => {
  console.log('payload', payload);
  const swipeX = useSharedValue(0);

  const pan = Gesture.Pan()
    .onUpdate(event => {
      if (event.translationX > 0 && event.translationX < 260) {
        swipeX.value = event.translationX;
      }
    })
    .onEnd(event => {
      if (swipeX.value > 100) {
        runOnJS(() => {})();
      }
      if (event.translationX > 220) {
        swipeX.value = 260;
      } else {
        swipeX.value = withSpring(0, {duration: 4500}); // Reset after swipe
      }
    });

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{translateX: swipeX.value}],
  }));

  const textOpacityStyle = useAnimatedStyle(() => {
    const opacity = interpolate(swipeX.value - 10, [10, 100], [1, 0]); // Hide text as swipe increases
    return {opacity};
  });

  return (
    <ActionSheet id={sheetId} animated gestureEnabled snapPoints={[70, 100]}>
      <GestureHandlerRootView style={{flexGrow: 1}}>
        <View
          style={{
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
            height: responsive.height(10),
            backgroundColor: Colors.color2C,
            borderRadius: responsive.width(70),
            marginHorizontal: responsive.width(5),
            flexDirection: 'row',
          }}>
          <GestureDetector gesture={pan}>
            <Animated.View
              style={[
                {
                  height: 60,
                  width: 60,
                  borderRadius: 30,
                  backgroundColor: Colors.white,
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'absolute',
                  left: 15,
                },
                animatedStyles,
              ]}>
              <SwipeRight />
            </Animated.View>
          </GestureDetector>
          <View style={{}}>
            <Animated.Text
              style={[
                {
                  fontSize: 20,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  color: Colors.white,
                },
                textOpacityStyle,
              ]}>
              PunchSwipe
            </Animated.Text>
          </View>
        </View>
        <SafeAreaView />
      </GestureHandlerRootView>
    </ActionSheet>
  );
};
export default PunchSwipe;
