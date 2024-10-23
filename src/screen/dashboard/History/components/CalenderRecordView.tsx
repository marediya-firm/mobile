import { Moment } from 'moment';
import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import { CalenderView } from '../../../../components/CalenderView';
import { PunchRecord } from './RecordView';

type PunchRecordType = {
  day: Moment;
  punchIn: string;
  punchOut: string;
  totalHours: string;
};
export const Calendar = () => {
  return (
    <>
      {/* Month Navigation */}
      <View style={styles.calenderDate}>
        <CalenderView />
      </View>
      <View style={styles.recordFlat}>
        <FlatList<PunchRecordType>
          data={[]}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.paddingB}
          renderItem={PunchRecord}
          keyExtractor={(_, index) => String(index * 80)}
        />
      </View>
    </>
  );
};

export const styles = StyleSheet.create({
  calenderDate: { marginRight: 10 },
  recordFlat: {
    marginTop: 10,
    flex: 1,
  },
  paddingB: { paddingBottom: 80 },
});
