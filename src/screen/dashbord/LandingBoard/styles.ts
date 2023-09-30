import {StyleSheet} from 'react-native';
import {Colors} from '../../../constant';

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.heavyDark,
  },
  safeAreView: {
    backgroundColor: Colors.heavyDark,
  },
  scrollContain: {
    marginHorizontal: 16,
    paddingBottom: 40,
  },
  categoryTitle: {
    marginTop: 40,
    alignItems: 'center',
  },
  wrapper: {flex: 1},
  questionWrapper: {marginTop: 30, flexDirection: 'row'},
  question: {color: Colors.white, fontSize: 20, fontWeight: '500'},
  fillScroll: {marginTop: 15},
  fillQuestionWrapper: {marginHorizontal: 8, alignSelf: 'center'},
  fillQuestionView: {
    height: 3,
    alignSelf: 'center',
    borderRadius: 12,
    width: 26,
    marginRight: 1,
    backgroundColor: 'red',
  },
  number: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    width: 35,
    marginTop: 7,
    borderRadius: 17,
    backgroundColor: Colors.semiGreen,
  },
  quizQuestion: {
    flex: 1,
    marginTop: '16%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  optionWrapper: {marginTop: 16},
  option: {
    height: 45,
    borderWidth: 1,
    paddingHorizontal: 20,
    marginVertical: 12,
    borderRadius: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  selectedIcon: {
    height: 20,
    alignSelf: 'center',
    width: 20,
    borderRadius: 10,
    borderColor: 'grey',
    borderWidth: 1,
  },
  bottomButton: {
    flexDirection: 'row',
    marginTop: 40,
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  quit: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  next: {
    height: 45,
    width: '45%',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#11bbeb',
  },
  quitText: {color: Colors.snowGrey, paddingLeft: 12},
  flex: {flex: 1},
});

export const fillStyles = (
  ...params: Array<number | number | boolean | any>
) => {
  // console.log("params",params);

  return {
    backgroundColor:
      params[2] && params[3]?.length - 1 == params[1]
        ? Colors.semiGreen
        : params[2]
        ? Colors.semiGreen
        : params[0] == params[1]
        ? Colors.semiGrey
        : 'red',
  };
};
