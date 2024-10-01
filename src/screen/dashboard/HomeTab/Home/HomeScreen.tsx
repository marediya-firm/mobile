import {Image, ImageBackground, StyleSheet, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CustomView} from '../../../../components/CoreComponent';
import {View} from 'react-native';
import {Colors, fontStyleVariant, variant} from '../../../../utils';
import {
  ClockIn,
  ClockOut,
  Punch,
  Refresh,
  TotalHours,
} from '../../../../assets/icon';
import axios from 'axios';
import {daysOfWeek, monthsOfYear} from '../../../../constant';
import LinearGradient from 'react-native-linear-gradient';
import {appImages} from '../../../../assets/image';
import responsive, {IResponsive} from '../../../../utils/responsive';
import {TouchableOpacity} from 'react-native';
import {SheetManager} from 'react-native-actions-sheet';

export const HomeScreen = () => {
  const [serverTime, setServerTime] = useState({
    currentTime: '',
    currentDate: '',
  });
  const styles = useMakeStyles(responsive);

  useEffect(() => {
    // Simulate fetching server time (replace this with your API call if needed)
    const fetchServerTime = async () => {
      try {
        // Simulate server time fetch, replace with real API
        const data = await axios.get('https://worldtimeapi.org/api/ip');
        console.log(setServerTime(formatTime(new Date(data?.data?.datetime))));
      } catch (error) {
        console.error('Error fetching server time:', error);
      }
    };
    fetchServerTime();
  }, []);

  // Function to format the time in the desired format
  const formatTime = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    };
    const currentTime = date.toLocaleTimeString('en-US', options);

    return {
      currentTime,
      currentDate: `${
        monthsOfYear[date.getMonth()]
      } ${date.getDate()}, ${date.getFullYear()} - ${
        daysOfWeek[date.getDay()]
      }`,
    };
  };

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

  return (
    <ImageBackground
      source={appImages.background}
      style={[styles.customView, styles.background]}>
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
        <View style={styles.timeContainer}>
          <Text style={fontStyleVariant[variant.F30050]}>
            {serverTime?.currentTime}
          </Text>
          <Text style={styles.dateText}>{serverTime?.currentDate}</Text>
        </View>
        <TouchableOpacity
          style={styles.gradientContainer}
          onPress={() => {
            SheetManager.show('punch-swipe-sheet', {
              payload: {value: 'punch-swipe-sheet'},
            });
          }}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 10, y: 0}}
            colors={[Colors.whiteEA, '#F1F1F1', '#E2E6EA']}
            style={styles.gradient}>
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
const useMakeStyles = ({height, width}: IResponsive) =>
  StyleSheet.create({
    customView: {
      paddingHorizontal: 18,
      flex: 1,
    },
    headerContainer: {
      flexDirection: 'row',
    },
    background: {backgroundColor: Colors.colorF9},
    circle: {
      height: 50,
      width: 50,
      borderRadius: 25,
    },
    circleOuter: {
      height: 60,
      width: 60,
      borderRadius: 30,
      backgroundColor: Colors.grey,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textContainer: {
      marginLeft: 15,
      justifyContent: 'center',
    },
    refreshContainer: {
      marginLeft: 10,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    clockInText: {
      fontWeight: '700',
      fontSize: 12,
      marginTop: responsive.height(1),
      color: Colors.grey46,
      left: 2,
    },
    clockInContainer: {
      shadowColor: Colors.colorEF,
      shadowOffset: {
        width: 1,
        height: 1,
      },
      shadowOpacity: 10,
      shadowRadius: 100,
      elevation: 5,
      height: height(23),
      width: width(51),
      borderRadius: width(80),
      backgroundColor: Colors.white,
      alignItems: 'center',
      justifyContent: 'center',
    },
    clockInContainerParent: {
      backgroundColor: Colors.colorF1,
      borderRadius: width(90),
      height: height(27),
      width: width(58),
      alignItems: 'center',
      justifyContent: 'center',
    },
    gradient: {
      height: height(31),
      width: width(68),
      borderRadius: width(90),
      alignItems: 'center',
      justifyContent: 'center',
    },
    gradientContainer: {
      alignItems: 'center',
      marginTop: height(8),
    },
    totalHoursContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: height(7),
    },
    timeContainer: {
      alignItems: 'center',
      marginTop: height(4),
    },
    timeText: {
      color: Colors.grey46,
    },
    employeeCodeText: {
      ...fontStyleVariant[variant.F40014],
      fontWeight: '400',
      color: Colors.grey94,
    },
    employeeNameText: {
      ...fontStyleVariant[variant.F50019],
      color: Colors.grey46,
    },
    dateText: {
      ...fontStyleVariant[variant.F40014],
      color: Colors.grey46,
    },
    timeText1: {
      ...fontStyleVariant[variant.F60014],
      marginTop: height(1.5),
      marginBottom: height(0.6),
    },
    totalHoursContainerWrapper: {
      alignItems: 'center',
    },
  });
