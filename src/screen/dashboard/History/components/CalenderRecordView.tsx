import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import { CalenderView } from '../../../../components/CalenderView';
import { PunchRecord } from './RecordView';
import { useHistoryZustand } from '../../../../zustand/history/HistoryStore';
import { HttpPunchDetailResponse } from '../../../../https/export';

export const Calendar = () => {
  return (
    <>
      {/* Month Navigation */}
      <View style={styles.calenderDate}>
        <CalenderView />
      </View>
      <PunchingRecordView />
    </>
  );
};

export const styles = StyleSheet.create({
  calenderDate: { marginRight: 10 },
  recordFlat: {
    marginTop: 10,
    flex: 1,
  },
  paddingB: { paddingBottom: 100 },
});

const PunchingRecordView = React.memo(() => {
  const attendanceRecord = useHistoryZustand(state => state?.attendance);

  return (
    <View style={styles.recordFlat}>
      {attendanceRecord?.length > 0 && (
        <FlatList<HttpPunchDetailResponse>
          data={attendanceRecord}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.paddingB}
          renderItem={({ item, index }) => (
            <PunchRecord item={item} index={index} />
          )}
          keyExtractor={(_, index) => String(index * 80)}
        />
      )}
    </View>
  );
});

PunchingRecordView.displayName = 'PunchingRecordView';
