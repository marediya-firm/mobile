import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Arrow } from '../../../../assets/icon';
import responsive from '../../../../utils/responsive';

export type BackButtonsProps = {
  handlePrvNxt: (prv?: boolean) => void;
};

export const BackButtons = React.memo((props: BackButtonsProps) => {
  const { handlePrvNxt } = props;
  return (
    <View style={styles.rightContainer}>
      <View style={styles.row}>
        <Pressable style={styles.arrowButton} onPress={() => handlePrvNxt()}>
          <Arrow left />
        </Pressable>
        <Pressable
          style={styles.arrowButton}
          onPress={() => handlePrvNxt(true)}
        >
          <Arrow />
        </Pressable>
      </View>
    </View>
  );
});

export const styles = StyleSheet.create({
  rightContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  row: {
    flexDirection: 'row',
  },
  arrowButton: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#F7F8FC',
    marginRight: responsive.width(3),
  },
});

BackButtons.displayName = 'BackButtons';
