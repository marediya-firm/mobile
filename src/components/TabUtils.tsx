import {Dimensions, Platform, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {routePath} from '../routes/export';
import {Home} from '../assets/icon/Home';
import {HotDealSvg} from '../assets/icon/HotDeal';
import {ReserveSvg} from '../assets/icon/ReserveSvg';
import {RewardSvg} from '../assets/icon/RewardSvg';
import {ScannerSvg} from '../assets/icon/Scanner';
import {TabUtilsProps} from './export';
import {Colors} from '../utils';

const tabBarAssets = {
  [routePath.HomeStack]: {SvgImage: Home, label: 'Home'},
  [routePath.HotDeal]: {SvgImage: HotDealSvg, label: 'Hot Deal'},
  [routePath.Scanner]: {SvgImage: ScannerSvg, label: ''},
  [routePath.Reward]: {SvgImage: RewardSvg, label: 'Reward'},
  [routePath.Reserve]: {SvgImage: ReserveSvg, label: 'Reserve'},
};

export const TabUtils = (props: TabUtilsProps) => {
  const {focus, tabDetail} = props;
  const thirdTab = tabDetail.name === routePath.Scanner;
  const Icon = tabBarAssets[tabDetail.name].SvgImage as FC<{color?: string}>;

  return (
    <React.Fragment>
      {thirdTab ? (
        <View style={style.left}>
          <View style={style.thirdContainer}>
            <ScannerSvg />
          </View>
        </View>
      ) : (
        <View style={focus ? style.focusOn : style.focusOff}>
          <Icon color={focus ? Colors.color151522 : Colors.colorF5F4EC} />
          <Text style={[getTextColor(focus).label, {textAlign: 'center'}]}>
            {tabBarAssets[tabDetail.name].label}
          </Text>
        </View>
      )}
    </React.Fragment>
  );
};

export const style = StyleSheet.create({
  left: {
    left: 3,
  },
  thirdContainer: {
    backgroundColor: Colors.color95ae45,
    bottom: 30,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    borderRadius: 35,
  },
  focusOn: {
    height: Platform.OS === 'android' ? 75 : 70,
    width: Platform.OS === 'android' ? 75 : 70,
    borderRadius: Platform.OS === 'android' ? 37.5 : 35,
    backgroundColor: Colors.white,
    left: Platform.OS === 'android' ? 5 : 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  focusOff: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  tabBarStyle: {
    position: 'absolute',
    alignContent: 'center',
    bottom: 10,
    height: 80,
    backgroundColor: '#151522',
    marginHorizontal: 10,
    borderRadius: 40,
  },
});

const getTextColor = (focus: boolean) => {
  return StyleSheet.create({
    label: {
      color: focus ? Colors.color151522 : Colors.colorF5F4EC,
      fontSize: 10,
      top: 5,
    },
  });
};
