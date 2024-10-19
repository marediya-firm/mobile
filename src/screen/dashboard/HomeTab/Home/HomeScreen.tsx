import { ImageBackground, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { CustomView } from '../../../../components/CoreComponent';
import { View } from 'react-native';
import {
  fontStyleVariant,
  timeDifferenceISO,
  timeHHMM,
  variant,
} from '../../../../utils';
import {
  ClockIn,
  ClockOut,
  Refresh,
  TotalHours,
} from '../../../../assets/icon';
import { appImages } from '../../../../assets/image';
import responsive from '../../../../utils/responsive';
import { MMKVStorage, UserPrivateKey } from '../../../../services/export';
import { LoginAPIResponse } from '../../../auth/Login/export';
import { useMakeStyles, ViewServerTime } from '../export';
import { HttpRequest } from '../../../../https/HttpsService';
import { loadDataFromHttpsHookApi } from '../../../../hook/export';
import { Avatar, ProfileDetail } from './components/export';
import { zustandFnc } from '../../../../zustand/function/Function';
import { PunchButton } from './components/PunchButton';

export const HomeScreen = () => {
  const styles = useMakeStyles(responsive);
  const store = zustandFnc?.useHomeZustand(state => state?.data);

  const user =
    MMKVStorage.getValue<LoginAPIResponse['data']>(UserPrivateKey.UserDetail)
      ?.userId ?? '';

  loadDataFromHttpsHookApi<'punchDetail'>({
    endPoint: HttpRequest.apiEndPoint.getPunchDetailByDate,
    payload: { userId: user },
    zustandKey: 'useHomeZustand',
  });

  const [totalTime, setTotalTime] = useState<string>('');

  const punchSessions = store?.punchSessions;
  const punchIn = punchSessions?.[0]?.punchIn;
  const punchOut = punchSessions?.[punchSessions?.length - 1]?.punchOut;

  const timer = () =>
    setTotalTime(timeDifferenceISO(punchIn, punchOut ?? new Date()));

  useEffect(() => {
    let clear: NodeJS.Timeout;
    if (punchIn) {
      timer();
      clear = setInterval(() => timer(), 60 * 1000);
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
    <ImageBackground
      source={appImages.background}
      style={[styles.customView, styles.background]}
    >
      <CustomView style={styles.customView}>
        <View style={styles.headerContainer}>
          <Avatar />
          <ProfileDetail />
          <View style={styles.refreshContainer}>
            <Refresh />
          </View>
        </View>
        <ViewServerTime />
        <PunchButton />
        <View style={styles.totalHoursContainer}>
          {timingArray?.map((item, index) => (
            <View key={index} style={styles.totalHoursContainerWrapper}>
              <item.Icon />
              <Text style={styles.timeText1}>{item.time}</Text>
              <Text style={fontStyleVariant[variant.F40012]}>
                {item.status}
              </Text>
            </View>
          ))}
        </View>
      </CustomView>
    </ImageBackground>
  );
};

export default HomeScreen;
