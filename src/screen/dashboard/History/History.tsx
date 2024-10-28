import { ImageBackground, View } from 'react-native';
import React from 'react';
import { CustomText, CustomView } from '../../../components/CoreComponent';
import { variant } from '../../../utils';
import { MenuIcon } from '../../../assets/icon';
import { appImages } from '../../../assets/image';
import { Calendar } from './components/CalenderRecordView';
import { useMakeStyle } from './styles';
import { strings } from '../../../constant';

const History = () => {
  const styles = useMakeStyle();

  return (
    <ImageBackground style={styles.wrapper} source={appImages.background}>
      <CustomView style={styles.wrapper}>
        <View style={styles.headerText}>
          <CustomText
            text={strings.attendanceHistory}
            variant={variant.F50022}
            extraStyle={styles.headerText}
          />
          <MenuIcon />
        </View>
        <View style={styles.calenderView}>
          <Calendar />
        </View>
      </CustomView>
    </ImageBackground>
  );
};

export default History;
