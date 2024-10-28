import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import { PunchRecord } from './RecordView';
import { useHistoryZustand } from '../../../../zustand/history/HistoryStore';
import { HttpPunchDetailResponse } from '../../../../https/export';

export const PunchRecordView = () => {
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
};

export const styles = StyleSheet.create({
  recordFlat: {
    marginTop: 10,
    flex: 1,
  },
  paddingB: { paddingBottom: 100 },
});

PunchRecordView.displayName = 'PunchRecordView';
