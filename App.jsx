import React, { useState, useEffect, useRef } from 'react';
import { NavigationContainer, useNavigationContainerRef, CommonActions } from '@react-navigation/native';
import { createStackNavigator, StackActions } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import HomeScreen from "./src/screens/HomeScreen";
import OnboardingScreen from "./src/screens/OnboardingScreen";
import SplashScreen from './src/screens/SplashScreen';
import InfoScreen from './src/screens/InfoScreen';
import analytics from '@react-native-firebase/analytics';
import DailyWordScreen from './src/screens/DailyWordScreen';
import VocabScreen from './src/screens/VocabScreen';
import Header from './src/components/Header';
import FavoriteScreen from './src/screens/FavoriteScreen';
import FlashcardScreen from './src/screens/FlashcardScreen';

const Stack = createStackNavigator();

const App = () => {

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
          options={{headerShown:true}}
        //  options={{ header: () => <Header /> }}
        />
        <Stack.Screen
          name="DailyWordScreen"
          component={DailyWordScreen}
          options={{headerShown:false}}
        />
         <Stack.Screen
          name="VocabScreen"
          component={VocabScreen}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="FavoriteScreen"
          component={FavoriteScreen}
          options={{headerShown:true}}
        />
        <Stack.Screen
          name="FlashcardScreen"
          component={FlashcardScreen}
          options={{headerShown:true}}
        />
        {/* <Stack.Screen
          name="NotificationScreen"
          component={NotificationScreen}
          options={{headerShown:true}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;