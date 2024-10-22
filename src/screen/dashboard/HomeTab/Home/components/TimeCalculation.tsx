import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ClockIn, ClockOut, TotalHours } from '../../../../../assets/icon';
import {
  findTotalMils,
  fontStyleVariant,
  IResponsive,
  timeHHMM,
  variant,
} from '../../../../../utils';
import { zustandFnc } from '../../../../../zustand/function/Function';
import responsive from '../../../../../utils/responsive';

export const UserTimeCalculation = () => {
  const styles = useMakeStyles(responsive);
  const [totalTime, setTotalTime] = React.useState<string>('');

  const session = zustandFnc?.useHomeZustand(
    state => state?.data?.punchSessions,
  );

  const punchSessions = session ?? [];
  const punchIn = punchSessions?.[0]?.punchIn;
  const punchOut = punchSessions?.[punchSessions?.length - 1]?.punchOut;

  const timer = () => setTotalTime(findTotalMils(punchSessions));

  React.useEffect(() => {
    let clear: NodeJS.Timeout;
    if (punchIn) {
      timer();
      if (!punchOut) {
        clear = setInterval(() => timer(), 60 * 1000);
      }
    }
    return () => clearInterval(clear);
  }, [punchIn, punchOut]);

  const timingArray = [
    {
      time: punchIn ? timeHHMM(punchIn) : '00:00',
      status: 'Punch In',
      Icon: ClockIn,
    },
    {
      time: timeHHMM(String(punchOut ?? new Date())),
      status: punchOut ? 'Punch Out' : 'Current Time',
      Icon: ClockOut,
    },
    {
      time: punchIn ? totalTime : '00:00',
      status: 'Total Hours',
      Icon: TotalHours,
    },
  ];

  return (
    <>
      {timingArray?.map((item, index) => (
        <View key={index} style={styles.totalHoursContainerWrapper}>
          <item.Icon />
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
