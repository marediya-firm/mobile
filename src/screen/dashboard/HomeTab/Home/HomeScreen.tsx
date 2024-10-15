import { Image, ImageBackground, Text } from 'react-native';
import React, { useEffect } from 'react';
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

export const HomeScreen = () => {
  const user =
    '66f8f71b6fea92913c8b34ff' ??
    MMKVStorage.getValue<LoginAPIResponse['data']>(UserPrivateKey.UserDetail)
      ?.user_id;

  console.log('user', user);

  const styles = useMakeStyles(responsive);

  const timingArray = [
    {
      time: '09:08 AM',
      status: 'Punch In',
      Icon: ClockIn,
    },
    {
      time: '09:08 AM',
      status: 'Punch Out',
      Icon: ClockOut,
    },
    {
      time: '09:08 AM',
      status: 'Total Hours',
      Icon: TotalHours,
    },
  ];

  useEffect(() => {
    (async () => {
      const data = await HttpRequest.clientGetRequest<'punchDetail'>({
        endPoint: HttpRequest.apiEndPoint.getPunchByUser,
        payload: { userId: user as string },
      });
      console.log('============data===========', data);
    })();
  }, []);

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
