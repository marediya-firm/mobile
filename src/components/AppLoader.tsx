import React, { useContext } from 'react';
import { View, Modal, StyleSheet, ActivityIndicator } from 'react-native';
import { Colors } from '../constant';
// import { GlobalData } from '../context/CommonContext';

const AppLoader = () => {
    // const { rootStore: { globalLoading } }: any = useContext(GlobalData)
    return (
        <Modal
            transparent
            visible={false}
            animationType="none"
            supportedOrientations={['portrait', 'landscape']}>
            <View style={style.overlayStyle}>
                <ActivityIndicator size="large" color={Colors.blue} />
            </View>
        </Modal>
    );
};

export default AppLoader;

const style = StyleSheet.create({
    overlayStyle: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});