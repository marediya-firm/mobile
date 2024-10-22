import { ImageBackground } from 'react-native';
import React from 'react';
import { CustomView } from '../../../../components/CoreComponent';
import { View } from 'react-native';
import { Refresh } from '../../../../assets/icon';
import { appImages } from '../../../../assets/image';
import responsive from '../../../../utils/responsive';
import { useMakeStyles, ViewServerTime } from '../export';
import { HttpRequest } from '../../../../https/HttpsService';
import { loadDataFromHttpsHookApi } from '../../../../hook/export';
import {
  Avatar,
  ProfileDetail,
  PunchButton,
  UserTimeCalculation,
} from './components/export';

import { useHomeZustand } from '../../../../zustand/home/HomeStore';

export const HomeScreen = () => {
  const styles = useMakeStyles(responsive);

  /**
   * For indicating loading state
   */
  const isLoading = useHomeZustand(data => !!data?.data?.punchType?.length);
  /**
   * Calling Api Hook and based on key set the response value in zustand
   * @see avoid propr drilling
   */
  loadDataFromHttpsHookApi<'punchDetail'>({
    endPoint: HttpRequest.apiEndPoint.getPunchDetailByDate,
    zustandKey: 'useHomeZustand',
  });

  return (
    <ImageBackground
      source={appImages.background}
      style={[styles.customView, styles.background]}
    >
      <CustomView isLoading={!isLoading} style={styles.customView}>
        <View style={styles.headerContainer}>
          <Avatar />
          <ProfileDetail />
          <View style={styles.refreshContainer}>
            <Refresh />
          </View>
        </View>
        <ViewServerTime />
        <PunchButton />
        <View style={styles.totalHoursContainer}>
          <UserTimeCalculation />
        </View>
      </CustomView>
    </ImageBackground>
  );
};

export default HomeScreen;
