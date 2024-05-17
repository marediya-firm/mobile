import React, {useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {Colors, ConstantString, StringConstant} from '../../../../constant';
import {HomeScreenProps} from '../export';
import {CustomText} from '../../../../components/export';
import {variant} from '../../../../utils';
import {Mic, Search} from '../../../../assets/icon';
import {CategoryComponent} from '../../../../components/CategoryComponent';

const HomeScreen = (homeScreenProps: HomeScreenProps) => {
  const {navigation} = homeScreenProps;

  const appString = ConstantString('strings') as StringConstant;
  const [selectCategory, setSelectCategory] = useState<number>(0);

  return (
    <View style={myStyle.mainWrapper}>
      <StatusBar backgroundColor={Colors.darkBlack} />
      <SafeAreaView style={{backgroundColor: Colors.white}} />
      <View style={myStyle.goodMorning}>
        <CustomText
          extraStyle={{color: Colors.darkBlack}}
          text={appString.GoodMorning}
          variant={variant.F50024}
        />
        <View style={myStyle.underLine} />
        <View style={myStyle.searchWrapperM}>
          <View style={myStyle.searchWarper}>
            <Search />
            <CustomText
              text={appString.lookingFor}
              variant={variant.F30012}
              extraStyle={myStyle.extraStyle}
            />
            <View style={myStyle.userSearch}>
              <Mic />
            </View>
          </View>

          <View style={myStyle.categoryWrapper}>
            <CategoryComponent
              selectCategory={selectCategory}
              setSelectCategory={setSelectCategory}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
export default HomeScreen;

const myStyle = StyleSheet.create({
  mainWrapper: {flex: 1, backgroundColor: Colors.white},
  foodTab: {
    marginTop: 12,
    backgroundColor: Colors.white,
    shadowOffset: {
      width: 0,
      height: 1.9,
    },
    elevation: 8,
    shadowRadius: 1.9,
    shadowColor: Colors.darkBlack,
    shadowOpacity: 0.2,
    paddingVertical: 13.7,
    paddingHorizontal: 15.6,
    borderRadius: 19.5,
    flexDirection: 'row',
  },
  categoryImage: {height: 60, width: 60, borderRadius: 35},
  underLine: {
    height: 2,
    backgroundColor: Colors.color95ae45,
  },
  goodMorning: {marginHorizontal: 24, marginTop: 24},
  searchWrapperM: {marginTop: 18},
  searchWarper: {
    padding: 16,
    backgroundColor: Colors.white,
    shadowColor: Colors.semiBlue,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowRadius: 2.06,
    shadowOpacity: 0.5,
    borderRadius: 7,
    elevation: 3,
    paddingHorizontal: 16,
    flexDirection: 'row',
  },
  extraStyle: {color: Colors.color898989, left: 10},
  userSearch: {
    alignItems: 'flex-end',
    flex: 1,
  },
  categoryWrapper: {paddingTop: 24},
});
