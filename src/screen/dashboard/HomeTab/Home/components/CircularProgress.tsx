import React, { useEffect, useMemo } from 'react';
import { View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
} from 'react-native-reanimated';
import { Colors } from '../../../../../utils';
import { useHomeZustand } from '../../../../../zustand/home/HomeStore';
import { TabFocusLister } from '../../../../../hook/export';

export type CircularProgressProps = {
  size: number;
  strokeWidth: number;
};

export const CircularProgress = React.memo(
  (props: CircularProgressProps) => {
    const { size, strokeWidth } = props;
    const radius = (size - strokeWidth) / 2;
    const [focus, remove] = TabFocusLister();

    useEffect(() => {
      return () => {
        remove();
      };
    }, [remove]);

    return (
      <View style={{ width: size, height: size }}>
        <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          {/* Background Circle */}
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={Colors.r01} // Semi-transparent dark color for shadow
            strokeWidth={strokeWidth + 2} // Slightly larger stroke width for shadow
            fill="none"
          />
          {/* Animated Circle */}
          {focus && (
            <AnimatedCircularProgress
              size={size}
              strokeWidth={strokeWidth}
              color={Colors.color1E}
            />
          )}
        </Svg>
      </View>
    );
  },
  () => true,
);

CircularProgress.displayName = 'CircularProgress';

type AnimatedCircularProgressProps = {
  size: number;
  strokeWidth: number;
  color: string;
};

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedCircularProgress = React.memo(
  ({ size, strokeWidth, color }: AnimatedCircularProgressProps) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const animatedProgress = useSharedValue(0);

    const totalMilliseconds = useHomeZustand(
      state => state?.data?.totalMilliseconds,
    );

    const animatedProps = useAnimatedProps(() => ({
      strokeDashoffset: circumference * (1 - animatedProgress.value / 100),
    }));

    const progress = useMemo(() => {
      const second = Number((totalMilliseconds ?? 0) / 1000);
      return Math.round(
        ((second < 28800 ? second : 28800) /
          28800) /* 8 hours in seconds (28,800 seconds) */ *
          100,
      );
    }, [totalMilliseconds]);

    useEffect(() => {
      animatedProgress.value = withTiming(progress, { duration: 2000 });
    }, [progress]);

    return (
      <AnimatedCircle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={circumference}
        animatedProps={animatedProps}
        strokeLinecap="round"
      />
    );
  },
  () => true,
);

AnimatedCircularProgress.displayName = 'AnimatedCircularProgress';
