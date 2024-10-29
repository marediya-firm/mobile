import { StyleSheet, Text, View } from 'react-native';
import React, { FC, memo } from 'react';
import { Colors } from '../utils/Colors';

const OrWith: FC = memo(() => {
  return (
    <View style={styles.main}>
      <View style={styles.line} />
      <Text>{'Or With'}</Text>
      <View style={styles.line} />
    </View>
  );
});
export { OrWith };
OrWith.displayName = 'OrWith';

const styles = StyleSheet.create({
  main: {
    marginHorizontal: 35,
    marginTop: 32,
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  line: {
    height: 1,
    width: '37%',
    backgroundColor: Colors.borderColor,
    marginTop: 4,
    alignSelf: 'center',
  },
});
