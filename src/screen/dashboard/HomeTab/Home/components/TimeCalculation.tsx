import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  findDifference,
  fontStyleVariant,
  IResponsive,
  variant,
} from '../../../../../utils';
import { zustandFnc } from '../../../../../zustand/function/Function';
import responsive from '../../../../../utils/responsive';
import { createTimeData } from '../../../../../data/import';

export const UserTimeCalculation = () => {
  const styles = useMakeStyles(responsive);
  const [totalTime, setTotalTime] = React.useState<string>('');

  const session = zustandFnc?.useHomeZustand(
    state => state?.data?.punchSessions,
  );

  const totalMilliseconds = zustandFnc?.useHomeZustand(
    state => state?.data?.totalMilliseconds,
  );

  const punchSessions = session ?? [];
  const punchIn = punchSessions?.[0]?.punchIn;
  const punchOut = punchSessions?.[punchSessions?.length - 1]?.punchOut;

  const getElapsedTime = (updateTimer?: number) => {
    const elapsedMilliseconds = totalMilliseconds + (updateTimer ?? 0);
    setTotalTime(findDifference(elapsedMilliseconds));
  };

  React.useEffect(() => {
    let clear: NodeJS.Timeout;
    let updateTimer = 0;
    if (punchIn) {
      getElapsedTime();
      if (!punchOut) {
        clear = setInterval(() => {
          updateTimer += 60000;
          getElapsedTime(updateTimer);
        }, 60 * 1000);
      }
    }
    return () => clearInterval(clear);
  }, [punchIn, punchOut]);

  const timeData = createTimeData(punchIn, punchOut, totalTime);

  return (
    <>
      {timeData?.map((item, index) => (
        <View key={index} style={styles.totalHoursContainerWrapper}>
          <item.IconComponent />
          <Text style={styles.timeText1}>{item.time}</Text>
          <Text style={fontStyleVariant[variant.F40012]}>{item.status}</Text>
        </View>
      ))}
    </>
  );
};

export const useMakeStyles = ({ height }: IResponsive) =>
  StyleSheet.create({
    totalHoursContainerWrapper: {
      alignItems: 'center',
    },
    timeText1: {
      ...fontStyleVariant[variant.F60014],
      marginTop: height(1.5),
      marginBottom: height(0.6),
    },
  });
