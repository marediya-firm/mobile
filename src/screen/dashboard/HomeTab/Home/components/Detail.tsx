import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors, fontStyleVariant, variant } from '../../../../../utils';

export const ProfileDetail = () => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.employeeNameText} numberOfLines={1}>
        {/**  Api name text */}
        HEY Jhone Doe
      </Text>
      <Text style={styles.employeeCodeText}>
        {/**  Employee code name text  */}
        MZ001234
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  employeeNameText: {
    ...fontStyleVariant[variant.F50019],
    color: Colors.grey46,
  },
  employeeCodeText: {
    ...fontStyleVariant[variant.F40014],
    fontWeight: '400',
    color: Colors.grey94,
  },
});
