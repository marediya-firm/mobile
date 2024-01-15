import {View, Modal, StyleSheet, ActivityIndicator} from 'react-native';
import {Colors} from '../constant';
import {useGlobalLoad} from '../zustand/export';
import React = require('react');

const AppLoader = () => {
  const loading = useGlobalLoad(state => state.loading);
  return (
    <Modal
      transparent
      visible={loading}
      animationType="none"
      supportedOrientations={['portrait', 'landscape']}>
      <View style={style.overlayStyle}>
        <ActivityIndicator size="large" color={Colors.grey} />
      </View>
    </Modal>
  );
};

export default AppLoader;

const style = StyleSheet.create({
  overlayStyle: {
    backgroundColor: 'rgba(0,0,0,0.50)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
