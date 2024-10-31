import moment from 'moment';
import { View, Text, StyleSheet } from 'react-native';
import {
  Colors,
  findDifference,
  fontStyleVariant,
  timeHHMM,
  variant,
} from '../../../../utils';
import responsive from '../../../../utils/responsive';
import { week } from '../../../../constant';
import { HttpPunchDetailResponse } from '../../../../https/export';
import { useMemo } from 'react';

export const PunchRecord = ({
  item,
}: {
  item: HttpPunchDetailResponse;
  index: number;
}) => {
  const date = moment(item.punchSessions?.[0]?.punchIn);
  const dateFormat = date?.date() < 10 ? `0${date?.date()}` : date?.date();
  const totalHours = useMemo(
    () => findDifference(Math.round(item?.totalMilliseconds)),
    [item?.totalMilliseconds],
  );

  return (
    <View style={styles.recordWrapper}>
      <View style={styles.recordContainer}>
        <View
          style={[
            styles.dateContainer,

            {
              backgroundColor:
                item?.totalMilliseconds / 1000 > 14400 &&
                item?.totalMilliseconds / 1000 < 28800
                  ? Colors.color1E
                  : item?.totalMilliseconds / 1000 < 28800
                    ? Colors.color2C
                    : Colors.color55,
            },
          ]}
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
              {timeHHMM(
                item.punchSessions?.[item.punchSessions.length - 1]?.punchOut,
              )}
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

const styles = StyleSheet.create({
  recordWrapper: {
    marginHorizontal: 6,
    marginVertical: 10,
    backgroundColor: Colors.colorF6,
    borderRadius: 12,
    shadowOpacity: 0.4,
    shadowColor: Colors.borderColor,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    elevation: 3,
  },
  recordContainer: {
    shadowColor: Colors.colorEF,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 3,
      width: 1,
    },
    flexDirection: 'row',
    padding: 12,
    paddingHorizontal: 14,
    alignItems: 'center',
  },
  dateContainer: {
    backgroundColor: Colors.color55,
    padding: 15,
    paddingHorizontal: 17,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: responsive.width(2.5),
  },
  day: { marginTop: 2 },
  padH10: { paddingHorizontal: 10 },
  padL: { paddingLeft: 12, paddingHorizontal: 10 },
  timeStyle: {
    ...fontStyleVariant[variant.F30012],
    color: Colors.grey46,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  recordColor: { color: Colors.white },
  500: { fontWeight: '500' },
  detailWrap: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1,
    marginHorizontal: 12,
  },
});
