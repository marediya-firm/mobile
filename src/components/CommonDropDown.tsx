import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { Colors } from '../constant';

interface dropDown {
  data: Array<object | any>;
  value: any | string;
  onChangeValue: (item: any) => {} | any;
  placeHolder: string;
}
export const CommonDropDown = (props: dropDown) => {
  const {
    data = [],
    value = '',
    onChangeValue = () => {},
    placeHolder = '',
  } = props;

  return (
    <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        showsVerticalScrollIndicator={false}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={placeHolder}
        searchPlaceholder="Search..."
        value={value}
        onChange={(item: any) => {
          onChangeValue(item?.value);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 30,
    marginHorizontal: 39,
  },
  dropdown: {
    height: 48,
    borderColor: Colors.borderColor,
    borderRadius: 8,
    paddingHorizontal: 8,
    borderWidth: 1,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    color: Colors.placeHolderBlack,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: Colors.placeHolderBlack,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
