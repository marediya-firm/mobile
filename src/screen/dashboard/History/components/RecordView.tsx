import moment, { Moment } from 'moment';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { deviceWidth } from '../../../../../App';
import { fontStyleVariant, variant } from '../../../../utils';
import responsive from '../../../../utils/responsive';
import { week } from '../../../../constant';

type PunchRecordType = {
  day: Moment;
  punchIn: string;
  punchOut: string;
  totalHours: string;
};

export const PunchRecord = ({
  item,
}: {
  item: PunchRecordType;
  index: number;
}) => {
  const date = moment(item.day);
  const dateFormat = date?.date() < 10 ? `0${date?.date()}` : date?.date();

  return (
    <View style={styles.recordWrapper}>
      <View style={styles.recordContainer}>
        <View style={styles.dateContainer}>
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
            <Text style={styles.timeStyle}>{item.punchIn}</Text>
            <Text style={fontStyleVariant[variant.F30011]}>{'Punch In'}</Text>
          </View>
          <View style={styles.padH10}>
            <Text style={styles.timeStyle}>{item.punchOut}</Text>
            <Text style={fontStyleVariant[variant.F30011]}>{'Punch Out'}</Text>
          </View>

          <View style={styles.padH10}>
            <Text style={styles.timeStyle}>{item.totalHours}</Text>
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
  calenderWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  navText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  monthText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  weekdays: {
    flexDirection: 'row',
    paddingTop: 5,
  },
  weekdayText: {
    width: deviceWidth / 7 - 4,
    textAlign: 'center',
    fontWeight: '400',
    paddingVertical: 16,
    color: Colors.color2C,
  },
  dayContainer: {
    width: deviceWidth / 7 - 4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderColor: '#ddd',
  },
  dayText: {
    fontSize: 16,
  },
  calenderHeader: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 8,
  },
  arrowWrapper: { flexDirection: 'row', left: 10 },
  arrowLeft: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#F7F8FC',
    marginRight: responsive.width(4),
  },
  arrowRight: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#F7F8FC',
  },
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
  textAlign: { textAlign: 'center', paddingVertical: 4 },
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
