import { ImageBackground, Text, View } from 'react-native';
import React from 'react';
import { CustomView } from '../../../components/CoreComponent';
import { fontStyleVariant, variant } from '../../../utils';
import { MenuIcon } from '../../../assets/icon';
import { appImages } from '../../../assets/image';
import { Calendar } from './components/CalenderRecordView';
import { useMakeStyle } from './styles';

// export const punchRecord: PunchRecord[] = [
//   {
//     day: moment(),
//     punchIn: '09:08 AM',
//     punchOut: '06:05 PM',
//     totalHours: '08:13 ',
//   },
// ];

const History = () => {
  const styles = useMakeStyle();
  return (
    <ImageBackground style={styles.wrapper} source={appImages.background}>
      <CustomView style={styles.wrapper}>
        <View style={styles.headerText}>
          <Text style={[fontStyleVariant[variant.F50022], styles.headerText]}>
            Attendance History
          </Text>
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
