import { useDeferredValue, useMemo } from 'react';
import moment from 'moment';
import { View, Text } from 'react-native';
import {
  findDifference,
  fontStyleVariant,
  timeHHMM,
  variant,
} from '../../../../utils';
import { week } from '../../../../constant';
import { useHistoryZustand } from '../../../../zustand/history/HistoryStore';
import { makeStyle, PunchRecordParams, recordStyle as styles } from './export';

export const PunchRecord = ({ item: myItem }: PunchRecordParams) => {
  const item = useDeferredValue(myItem);
  const punchSessions = item.punchSessions;
  const date = moment(punchSessions?.[0]?.punchIn);
  const day = date.format('D');
  const militSeconds = item?.totalMilliseconds;
  const punchOut = punchSessions?.[punchSessions?.length - 1]?.punchOut;
  const dateFormat = date?.date() < 10 ? `0${date?.date()}` : date?.date();

  const totalHours = useMemo(
    () => findDifference(Math.round(militSeconds)),
    [militSeconds],
  );

  const isHalfDay = useHistoryZustand(
    state => state?.calender[String(day)]?.type,
  );

  return (
    <View style={styles.recordWrapper}>
      <View style={styles.recordContainer}>
        <View
          style={[styles.dateContainer, makeStyle(militSeconds, isHalfDay)]}
        >
          <Text style={[fontStyleVariant[variant.F50019], styles.recordColor]}>
            {dateFormat}
          </Text>
          <Text
            style={[
              fontStyleVariant[variant.F30011],
              styles.recordColor,
              styles[500],
            ]}
          >
            {week[date?.day()]}
          </Text>
        </View>
        <View style={styles.detailWrap}>
          <View style={styles.padL}>
            <Text style={styles.timeStyle}>
              {timeHHMM(item.punchSessions?.[0]?.punchIn)}
            </Text>
            <Text style={fontStyleVariant[variant.F30011]}>{'Punch In'}</Text>
          </View>
          <View style={styles.padH10}>
            <Text style={styles.timeStyle}>
              {!punchOut ? 'Missing' : timeHHMM(punchOut)}
            </Text>
            <Text style={fontStyleVariant[variant.F30011]}>{'Punch Out'}</Text>
          </View>

          <View style={styles.padH10}>
            <Text style={styles.timeStyle}>{totalHours}</Text>
            <Text style={fontStyleVariant[variant.F30011]}>
              {'Total Hours'}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
