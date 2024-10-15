import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {routePath} from '../routes/export';
import {ReserveSvg} from '../assets/icon/ReserveSvg';
import {ScannerSvg} from '../assets/icon/Scanner';
import {TabUtilsProps} from './export';
import {Colors, fontStyleVariant, variant} from '../utils';
import responsive from '../utils/responsive';
import {isIOS} from '../../App';
import {Dimensions} from 'react-native';
import {BagIcon, Home, HotDealSvg} from '../assets/icon';

const tabBarAssets = {
  [routePath.HomeStack]: {SvgImage: Home, label: 'HOME'},
  [routePath.HotDeal]: {SvgImage: HotDealSvg, label: 'DASHBOARD'},
  [routePath.History]: {SvgImage: BagIcon, label: 'HISTORY'},
  [routePath.Scanner]: {SvgImage: ScannerSvg, label: ''},
  [routePath.Reserve]: {SvgImage: ReserveSvg, label: 'Reserve'},
};

export const TabUtils = React.memo((props: TabUtilsProps) => {
  const {focus, tabDetail} = props;
  const Icon = tabBarAssets[tabDetail.name].SvgImage as FC<{color?: string}>;

  return (
    <View style={focus ? style.focusOn : style.focusOff}>
      <Icon color={focus ? Colors.color1E : Colors.colorF5F4EC} />
      {focus && (
        <Text style={fontStyleVariant[variant.F60013]}>
          {tabBarAssets[tabDetail.name].label}
        </Text>
      )}
    </View>
  );
});

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
    height: responsive.height(5.7),
    width: responsive.width(29),
    borderRadius: responsive.width(12),
    backgroundColor: Colors.color1C,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 7,
  },
  focusOff: {
    right: responsive.width(4),
  },
  tabBarStyle: {
    height: isIOS ? 75 : 85,
    backgroundColor: Colors.color2C,
    marginHorizontal: 12,
    paddingHorizontal: 12,
    borderRadius: Dimensions.get('screen').height * 0.1,
    position: 'absolute',
    bottom: isIOS ? 0 : 20,
  },
  tabBarItemStyle: {
    marginTop: isIOS ? 28 : 0,
    paddingHorizontal: 13,
  },
});
