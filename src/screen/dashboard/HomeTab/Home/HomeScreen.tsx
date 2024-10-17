import { Image, ImageBackground, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { CustomView } from '../../../../components/CoreComponent';
import { View } from 'react-native';
import { Colors, fontStyleVariant, variant } from '../../../../utils';
import {
  ClockIn,
  ClockOut,
  Punch,
  Refresh,
  TotalHours,
} from '../../../../assets/icon';
import LinearGradient from 'react-native-linear-gradient';
import { appImages } from '../../../../assets/image';
import responsive from '../../../../utils/responsive';
import { TouchableOpacity } from 'react-native';
import { SheetManager } from 'react-native-actions-sheet';
import { MMKVStorage, UserPrivateKey } from '../../../../services/export';
import { LoginAPIResponse } from '../../../auth/Login/export';
import { useMakeStyles, ViewServerTime } from '../export';
import { HttpRequest } from '../../../../https/HttpsService';
import {
  HttpPunchDetailResponse,
  HttpRequestType,
} from '../../../../https/export';

const timeHHMM = (date: string): string =>
  new Date(date).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

function timeDifferenceISO(startDateStr: string, endDateStr: string): string {
  // Convert the ISO 8601 date strings to Date objects
  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);

  // Calculate the difference in milliseconds
  const diffMs = endDate.getTime() - startDate.getTime();

  // Convert milliseconds to total minutes
  const diffMinutes = Math.floor(diffMs / (1000 * 60));

  // Calculate hours and remaining minutes
  const diffHours = Math.floor(diffMinutes / 60);
  const remainingMinutes = diffMinutes % 60;

  // Format hours and minutes to always have 2 digits
  const formattedHours = String(diffHours).padStart(2, '0');
  const formattedMinutes = String(remainingMinutes).padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}`;
}

const loadDataFromHttpsHook = <R extends keyof HttpRequestType>({
  loading = true,
  endPoint,
  payload,
}: {
  endPoint: string;
  loading?: boolean;
  payload?: HttpRequestType[R]['body'];
}) => {
  const [fetching, setFetching] = useState<{
    loading: boolean;
    response: HttpPunchDetailResponse;
  }>({ loading, response: {} as HttpPunchDetailResponse });

  useEffect(() => {
    (async () => {
      const data = await HttpRequest.clientGetRequest<R>({
        endPoint,
        payload,
      });
      setFetching({ loading: false, response: data?.data });
    })();
  }, []);
  return { fetching, setFetching };
};

export const HomeScreen = () => {
  const styles = useMakeStyles(responsive);

  const user =
    MMKVStorage.getValue<LoginAPIResponse['data']>(UserPrivateKey.UserDetail)
      ?.userId ?? '';

  const { fetching, setFetching } = loadDataFromHttpsHook<'punchDetail'>({
    endPoint: HttpRequest.apiEndPoint.getPunchDetailByDate,
    payload: { userId: user },
  });
  const [totalTime, setTotalTime] = useState<string>('');

  const punchSessions = fetching?.response?.punchSessions;
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
          <View style={styles.circleOuter}>
            <Image
              style={styles.circle}
              source={{
                uri: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=150',
                cache: 'reload',
              }}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.employeeNameText} numberOfLines={1}>
              {/**  Api name text */}
              HEY Jhone Doe
            </Text>
            <Text style={styles.employeeCodeText}>
              {/**  Employee code name text  */}
              MZ001234
            </Text>
          </View>
          <View style={styles.refreshContainer}>
            <Refresh />
          </View>
        </View>
        <ViewServerTime />
        <TouchableOpacity
          style={styles.gradientContainer}
          onPress={() => {
            SheetManager.show('punch-swipe-sheet', {
              payload: { value: 'punch-swipe-sheet' },
            });
          }}
        >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 10, y: 0 }}
            colors={[Colors.whiteEA, '#F1F1F1', '#E2E6EA']}
            style={styles.gradient}
          >
            <View style={styles.clockInContainerParent}>
              <View style={styles.clockInContainer}>
                <Punch />
                <Text style={styles.clockInText}>Punch In</Text>
              </View>
            </View>
          </LinearGradient>
        </TouchableOpacity>
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
