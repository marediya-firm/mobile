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

export type CircularProgressProps = {
  size: number;
  strokeWidth: number;
};

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
export const CircularProgress = React.memo(
  (props: CircularProgressProps) => {
    const { size, strokeWidth } = props;

    const totalMilliseconds = useHomeZustand(
      state => state?.data?.totalMilliseconds,
    );

    const progress = useMemo(() => {
      const second = Number((totalMilliseconds ?? 0) / 1000);
      return Math.round(
        ((second < 28800 ? second : 28800) /
          28800) /* 8 hours in seconds (28,800 seconds) */ *
          100,
      );
    }, [totalMilliseconds]);

    const animatedProgress = useSharedValue(0);
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    useEffect(() => {
      animatedProgress.value = withTiming(progress, { duration: 4000 });
    }, [progress]);

    const animatedProps = useAnimatedProps(() => {
      return {
        strokeDashoffset: circumference * (1 - animatedProgress.value / 100),
      };
    });

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
          <AnimatedCircle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={Colors.color1E}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            animatedProps={animatedProps}
            strokeLinecap="round"
          />
        </Svg>
      </View>
    );
  },
  () => true,
);

CircularProgress.displayName = 'CircularProgress';
