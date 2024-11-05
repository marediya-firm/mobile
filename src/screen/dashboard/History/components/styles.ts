import { StyleSheet } from 'react-native';
import { Colors, fontStyleVariant, variant } from '../../../../utils';
import responsive from '../../../../utils/responsive';

export const recordStyle = StyleSheet.create({
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

export const makeStyle = (militSeconds: number, isHalfDay: string) => ({
  backgroundColor:
    militSeconds / 1000 < 28800 && !isHalfDay
      ? Colors.color2C
      : militSeconds < 14400
        ? Colors.color1E
        : Colors.color55,
});
