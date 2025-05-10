import { FlatList, ImageBackground, StyleSheet, View } from 'react-native';
import React from 'react';
import { CustomText, CustomView } from '../../../components/export';
import { appImages } from '../../../assets/image';
import { Colors, variant } from '../../../utils';
import { dashBoardUtils, strings } from '../../../constant';
import { LogoutIcon } from '../../../assets/icon';

const DashboardScreen = () => {
  return (
    <ImageBackground style={styles.wrapper} source={appImages.background}>
      <CustomView style={styles.wrapper}>
        <FlatList
          ListHeaderComponent={() => (
            <View style={styles.header}>
              <CustomText
                text={strings.Dashboard}
                variant={variant.F50022}
                extraStyle={styles.headerText}
              />
              <View style={styles.join}>
                <LogoutIcon />
                <CustomText
                  text={strings.Logout}
                  variant={variant.F50015}
                  extraStyle={styles.logOut}
                />
              </View>
            </View>
          )}
          numColumns={2}
          data={dashBoardUtils}
          renderItem={({ item, index }) => (
            <View style={{ padding: 20 }} key={String(index)}>
              <View style={{ alignSelf: 'center' }}>
                <item.icon />
              </View>
              <CustomText
                text={item?.name}
                variant={variant.F30014}
                extraStyle={[{ color: Colors.color2C }]}
              />
            </View>
          )}
        />
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
  header: { flexDirection: 'row', justifyContent: 'space-between' },
  join: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logOut: { color: Colors.color2C, paddingLeft: 5 },
});
export default DashboardScreen;
