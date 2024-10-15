import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors, fontStyleVariant, variant} from '../../../../../utils';
import responsive, {IResponsive} from '../../../../../utils/responsive';
import {HomeController} from '../HomeController';

export const ServerTime = () => {
  const [serverTime, setServerTime] = useState(HomeController.formatTime());
  const styles = useMakeStyle(responsive);

  useEffect(() => {
    (async () => setServerTime(await HomeController.fetchServerTime()))();
  }, []);

  return (
    <View style={styles.timeContainer}>
      <Text style={fontStyleVariant[variant.F30050]}>
        {serverTime?.currentTime}
      </Text>
      <Text style={styles.dateText}>{serverTime?.currentDate}</Text>
    </View>
  );
};

const useMakeStyle = ({height}: IResponsive) =>
  StyleSheet.create({
    timeContainer: {
      alignItems: 'center',
      marginTop: height(4),
    },
    dateText: {
      ...fontStyleVariant[variant.F40014],
      color: Colors.grey46,
    },
  });
