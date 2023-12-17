import AsyncStorage from '@react-native-async-storage/async-storage';

export const LocalStorageGetItem = async (keyForValue: string) => {
  let valueFromLocalAsync: any;
  try {
    valueFromLocalAsync = await AsyncStorage.getItem(keyForValue);
  } catch (error: any) {
    console.log(error.message);
  }
  return JSON.parse(valueFromLocalAsync);
};

export const LocalStorageSetItem = async (keyForValue: string, value: any) => {
  try {
    let setItemJson = JSON.stringify(value);
    await AsyncStorage.setItem(keyForValue, setItemJson);
  } catch (error: any) {
    console.log(error.message);
  }
};
