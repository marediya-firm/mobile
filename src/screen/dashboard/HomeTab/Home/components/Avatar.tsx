import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import { Colors } from '../../../../../utils';

export const Avatar = () => {
  return (
    <View style={styles.circleOuter}>
      <Image
        style={styles.circle}
        source={{
          uri: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=150',
          cache: 'reload',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  circleOuter: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: Colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
