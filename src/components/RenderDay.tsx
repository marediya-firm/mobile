import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import {
  Menu,
  MenuTrigger,
  MenuOptions,
  renderers,
} from 'react-native-popup-menu';
import { deviceWidth } from '../../App';
import { Colors } from '../utils';
import { RenderDayProps } from './export';
import { useHistoryZustand } from '../zustand/history/HistoryStore';

const { Popover } = renderers;

export const RenderDay = React.memo((props: RenderDayProps) => {
  const { day } = props;
  const number = day.format('D');
  const digit = useHistoryZustand(state => state.calender[String(number)]);

  // Check if the current day is Sunday
  const isSunday = day.weekday() === 0;
  const colorStyle = { color: isSunday ? Colors.colorD7 : Colors.grey46 };

  return (
    <Menu
      renderer={Popover}
      rendererProps={{
        preferredPlacement: 'top',
        anchorStyle: styles.menuArrow,
      }}
    >
      <MenuTrigger disabled={!digit} style={styles.dayContainer}>
        <Text
          style={[
            styles.dayText,
            colorStyle,
            digit && !isSunday && styles.borderRed,
          ]}
        >
          {number}
        </Text>
      </MenuTrigger>

      <MenuOptions
        customStyles={{
          optionsContainer: styles.menuOptions,
        }}
      >
        <View style={styles.menuContent}>
          <Text style={styles.menuText}>{digit?.reason}</Text>
        </View>
      </MenuOptions>
    </Menu>
  );
});

RenderDay.displayName = 'RenderDay';

const styles = StyleSheet.create({
  dayContainer: {
    width: deviceWidth / 7 - 4,
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderColor: '#ddd',
  },
  dayText: {
    fontSize: 16,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  borderRed: {
    color: Colors.white,
    height: 35,
    width: 35,
    borderRadius: 17,
    backgroundColor: 'red',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  menuOptions: {
    width: deviceWidth / 1.5, // Set a consistent width for better display
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  menuArrow: {
    marginBottom: -19,
  },
  menuContent: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  menuText: {
    fontSize: 14,
    color: '#333',
  },
});
