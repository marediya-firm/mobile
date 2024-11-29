import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import ActionSheet, {
  SheetManager,
  SheetProps,
} from 'react-native-actions-sheet';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { deviceWidth } from '../../App';
import { SwipeRight } from '../assets/icon/SwipeRight';
import { HttpRequest } from '../https/HttpsService';
import { Colors, fontStyleVariant, variant } from '../utils';
import responsive from '../utils/responsive';
import { useHomeZustand } from '../zustand/home/HomeStore';

const PunchSwipe: FC<Required<SheetProps<'punch-swipe-sheet'>>> = ({
  sheetId,
}) => {
  const swipeX = useSharedValue(0);

  const onSwipeComplete = async () => {
    const store = useHomeZustand.getState();

    const punchType = await HttpRequest.clientPostRequest<'punchInOut'>({
      endPoint: HttpRequest.apiEndPoint.punchInOut,
      payload: {
        punchType: store?.data?.punchType,
      },
    });

    if (punchType?.data) {
      store.setData(punchType?.data);
    }
    SheetManager.hide('punch-swipe-sheet');
  };

  const pan = Gesture.Pan()
    .onUpdate(event => {
      if (event.translationX > 0 && event.translationX < deviceWidth - 60) {
        swipeX.value = event.translationX;
      }
    })
    .onEnd(event => {
      if (event.translationX > deviceWidth - 200) {
        swipeX.value = deviceWidth - 130;
        runOnJS(onSwipeComplete)();
      } else {
        swipeX.value = withSpring(0, {
          duration: 4500,
          stiffness: 100,
          clamp: { min: 10 },
        });
      }
    });

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: swipeX.value }],
  }));

  const textOpacityStyle = useAnimatedStyle(() => {
    const opacity = interpolate(swipeX.value + 12, [10, 100], [1, 0]); // Hide text as swipe increases
    return { opacity, color: Colors.white, left: 15 };
  });

  return (
    <ActionSheet id={sheetId} animated gestureEnabled snapPoints={[70, 100]}>
      <View style={styles.container}>
        <View style={styles.swipeContainer}>
          <GestureDetector gesture={pan}>
            <Animated.View style={[styles.animatedSwipe, animatedStyles]}>
              <SwipeRight />
            </Animated.View>
          </GestureDetector>
          <View>
            <Animated.Text
              style={[fontStyleVariant[variant.F50019], textOpacityStyle]}
            >
              Swipe right to Punch in
            </Animated.Text>
          </View>
        </View>
        <View style={styles.bottomContainer} />
      </View>
    </ActionSheet>
  );
};
export default PunchSwipe;

export const styles = StyleSheet.create({
  container: {
    height: responsive.height(18),
    justifyContent: 'center',
  },
  swipeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: responsive.height(9.3),
    backgroundColor: Colors.color2C,
    borderRadius: responsive.width(70),
    marginHorizontal: responsive.width(5),
    flexDirection: 'row',
  },
  animatedSwipe: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 15,
  },
  bottomContainer: {
    marginBottom: responsive.height(4),
  },
});
