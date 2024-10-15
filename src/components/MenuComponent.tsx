import { Image, StyleSheet, View } from 'react-native';
import React, { memo } from 'react';
import { RatingStar } from '../assets/icon';
import { Colors } from '../constant';
import { variant } from '../utils';
import { CustomText } from './CoreComponent';
import { MenuAPIResponse } from '../screen/dashboard/export';

export const MenuComponent = memo((props: MenuAPIResponse) => {
  return (
    <View style={myStyle.foodTab}>
      {/* <Image source={require('../../../../assets/icon/FOOD.png')} /> */}
      <View style={{ flex: 1, paddingHorizontal: 10 }}>
        <View
          style={{
            flexDirection: 'row',
          }}
        >
          <CustomText
            textProps={{ numberOfLines: 2 }}
            extraStyle={{ flex: 0.7 }}
            text="Salmon Salad"
            variant={variant.F50019}
          />
          <CustomText
            textProps={{ numberOfLines: 1 }}
            extraStyle={{
              paddingLeft: 10,
              flex: 0.35,
            }}
            text="20000"
            variant={variant.F50019}
          />
        </View>
        <CustomText
          textProps={{ numberOfLines: 1 }}
          text="Introduction about dishes"
          variant={variant.F30013}
        />
        <View style={{ flexDirection: 'row' }}>
          <RatingStar />
          <CustomText
            textProps={{ numberOfLines: 1 }}
            text="4.5"
            extraStyle={{
              paddingHorizontal: 5,
              color: Colors.color0A0A0A,
              opacity: 0.5,
            }}
            variant={variant.F30013}
          />
          <CustomText
            textProps={{ numberOfLines: 1 }}
            text={`(${'2000'})`}
            extraStyle={{ color: Colors.color0A0A0A, opacity: 0.5 }}
            variant={variant.F30013}
          />
        </View>
      </View>
    </View>
  );
});

const myStyle = StyleSheet.create({
  foodTab: {
    marginTop: 12,
    backgroundColor: Colors.grey3,
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
    flex: 1,
  },
  categoryImage: { height: 60, width: 60, borderRadius: 35 },
});
