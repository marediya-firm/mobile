import {
  Dimensions,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useMemo} from 'react';
import {styles} from './styles';
import {Trophy} from '../../../assets/icon';
import {marginTop} from '../../auth/Login/styles';
import {Colors} from '../../../constant';
import {useRoute} from '@react-navigation/native';
import {GlobalData} from '../../../context/CommonContext';
import {ROUTES} from '../../../routes/RoutesName/RoutesName';

export const Result = React.memo(() => {
  const route = useRoute();
  const {params}: any | object = route;

  const {
    rootStore: {navigation},
  }: object | any = useContext(GlobalData);

  const cacheStyles = useMemo(() => styles, []);
  console.log('params', params);

  let showCorrectAnswer = params?.rewardPoint / 10;
  return (
    <View style={{flex: 1, backgroundColor: Colors.heavyDark}}>
      <SafeAreaView />
      <View style={{alignItems: 'center', ...marginTop(40)}}>
        <Text style={{color: 'white'}}>Quiz Result</Text>
        <View style={marginTop(30)}>
          <Trophy />
        </View>
        <View style={marginTop(30)}>
          <Text style={{color: 'white'}}>Congartulations !</Text>
        </View>
        <Text style={{color: 'white', ...marginTop(30)}}>
          Awsome you are attend all question
        </Text>
        <Text style={{color: 'white', ...marginTop(30)}}>YOUR SCORE</Text>
        <Text
          style={{
            color: 'white',
            flexDirection: 'row',
            ...marginTop(30),
            fontSize: 30,
          }}>
          <Text
            style={{color: Colors.semiGreen}}>{`${showCorrectAnswer} /`}</Text>
          <Text>{` ${params?.questionData?.length} `}</Text>
        </Text>
        <Text style={{color: 'white', ...marginTop(30)}}>Earn Points</Text>
        <Text style={{color: 'white', fontSize: 30, ...marginTop(10)}}>
          {params?.rewardPoint}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-around',
          flexDirection: 'row',
          ...marginTop(30),
        }}>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            height: Dimensions.get('screen').width / 7,
            width: Dimensions.get('screen').width / 2.5,
            borderRadius: 12,
            backgroundColor: Colors.white,
            justifyContent: 'center',
          }}>
          <Text style={{color: 'black'}}>Share Result</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(ROUTES.ShowResults, {
              result: params?.questionData,
              rewardPoint: showCorrectAnswer,
            })
          }
          style={{
            alignItems: 'center',
            height: Dimensions.get('screen').width / 7,
            width: Dimensions.get('screen').width / 2.5,
            borderRadius: 12,
            backgroundColor: Colors.blue,
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white'}}>Check Answer</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, ...marginTop(50), alignItems: 'center'}}>
        <Text style={{color: 'white'}}>
          Note: Each correct answer should 10 point
        </Text>
      </View>
    </View>
  );
});
