import {Alert} from 'react-native';

export const AlertPopup = (
  ...params: Array<string | object | number | any>
) => {
  Alert.alert('Alert Title', 'My Alert Msg', [
    {
      text: 'Submit Quiz',
      onPress: () => {
        params[0]();
      },
    },
    {
      text: 'Cancel',
      onPress: () => {},
      style: 'cancel',
    },
  ]);
};
