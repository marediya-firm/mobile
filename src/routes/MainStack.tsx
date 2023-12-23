import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthStack, RootStackParamList, ScreenBridge, routePath} from './export';

const Stack = createStackNavigator<RootStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        freezeOnBlur: true,
        detachPreviousScreen: true,
        animationTypeForReplace: 'pop',
        cardOverlayEnabled: true,
        cardShadowEnabled: true,
        cardStyle: {direction: 'ltr', backgroundColor: 'red'},
        // cardOverlay: (props) => {
        //   return <View style={{flex: 1, backgroundColor: 'red'}}></View>;
        // },
      }}
      initialRouteName={routePath.AuthStack}>
      <Stack.Screen name={routePath.AuthStack} component={AuthStack} />
      <Stack.Screen name={routePath.ScreenBridge} component={ScreenBridge} />
    </Stack.Navigator>
  );
};

export default MainStack;
