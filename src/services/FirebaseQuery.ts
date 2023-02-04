import firestore from '@react-native-firebase/firestore/';
import { Platform } from 'react-native';

export const createAccountQuery = (...payload: Array<object | any>) => {
  // payload[1]name,payload[1]name,payload[1]email,payload[1]phoneNumber,payload[3]image,payload[4]userId,payload[5]createdTime
  firestore().collection("USER_LIST").doc(payload[4]).set({
    name: payload[0],
    email: payload[1],
    phoneNumber: payload[2],
    image: payload[3],
    userId: payload[4],
    createdTime: payload[5],
    points: 0,
    deviceType: Platform.OS,
  });
};
