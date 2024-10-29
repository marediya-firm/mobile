import { ImageBackground, StyleSheet, View } from 'react-native';
import React from 'react';
import { CustomText, CustomView } from '../../../components/export';
import { appImages } from '../../../assets/image';
import { Colors, variant } from '../../../utils';
import { strings } from '../../../constant';
import { LogoutIcon } from '../../../assets/icon';

const DashboardScreen = () => {
  return (
    <ImageBackground style={styles.wrapper} source={appImages.background}>
      <CustomView style={styles.wrapper}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <CustomText
            text={strings.Dashboard}
            variant={variant.F50022}
            extraStyle={styles.headerText}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <LogoutIcon />
            <CustomText
              text={strings.Logout}
              variant={variant.F50015}
              extraStyle={[{ color: Colors.color2C, paddingLeft: 5 }]}
            />
          </View>
        </View>
      </CustomView>
    </ImageBackground>
  );
};

export const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 8,
    flex: 1,
    paddingHorizontal: 12,
  },
  headerText: {
    shadowColor: Colors.borderColor,
    shadowOpacity: 0.1,
    shadowOffset: {
      height: 0.3,
      width: 0.1,
    },
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default DashboardScreen;
