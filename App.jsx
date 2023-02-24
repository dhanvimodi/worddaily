import React, { useState, useEffect } from 'react';
import {Button, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./src/screens/HomeScreen";
import OnboardingScreen from "./src/screens/OnboardingScreen";
import SplashScreen from './src/screens/SplashScreen';
import InfoScreen from './src/screens/InfoScreen';
    



const Stack = createStackNavigator();


const App = (props) => {

 
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;