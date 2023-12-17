import {View} from 'react-native';
import React from 'react';

export const CustomView = ({children}: any) => {
  return <View style={{flex: 1}}>{children}</View>;
};

export const CustomViewCenter = ({children}: any) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {children}
    </View>
  );
};
