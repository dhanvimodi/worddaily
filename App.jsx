import React, { useState, useEffect, useRef } from 'react';
import {Button, Text, View} from 'react-native';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./src/screens/HomeScreen";
import OnboardingScreen from "./src/screens/OnboardingScreen";
import SplashScreen from './src/screens/SplashScreen';
import InfoScreen from './src/screens/InfoScreen';
import analytics from '@react-native-firebase/analytics';
import DailyWordScreen from './src/screens/DailyWordScreen';
import VocabScreen from './src/screens/VocabScreen';
import Header from './src/components/Header';

const Stack = createStackNavigator();


const App = (props) => {

  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef();

  return (
    <NavigationContainer
    ref={navigationRef}
    onReady={() => {
      routeNameRef.current = navigationRef.getCurrentRoute().name;
    }}
    onStateChange={async () => {
      const previousRouteName = routeNameRef.current;
      const currentRouteName = navigationRef.getCurrentRoute().name;

      if (previousRouteName !== currentRouteName) {
        // Save the current route name for later comparison
        routeNameRef.current = currentRouteName;
        await analytics().logScreenView({
          screen_name: currentRouteName,
          screen_class: currentRouteName,
        });
        // Replace the line below to add the tracker from a mobile analytics SDK
      
      
      }
    }}
  >
      <Stack.Navigator
       screenOptions={
      
        {
        // headerStyle:{
        //   backgroundColor:'#dfdfdf'
        // },
         header: ({navigation}) => <Header navigation={navigation} />,
       }}
      >
      <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown:false}}
        />
      <Stack.Screen
          name="OnboardingScreen"
          component={OnboardingScreen}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="InfoScreen"
          component={InfoScreen}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="DailyWordScreen"
          component={DailyWordScreen}
          options={{headerShown:true}}
        />
         <Stack.Screen
          name="VocabScreen"
          component={VocabScreen}
          options={{headerShown:true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;