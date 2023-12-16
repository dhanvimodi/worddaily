import React, {useEffect, useRef} from 'react';
import {Text, TouchableOpacity, Image, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import analytics from '@react-native-firebase/analytics';

import Background from '../components/Background';
import styles from '../styles/OnboardingScreen';
import CarouselCards from '../components/Carousel';
import { storeVocabData } from '../utils/vocab';
import { storeWordOfTheDayData } from '../utils/wordOfTheDay';
import { schedulePushNotification } from './NotificationScreen';
import * as Notifications from 'expo-notifications'
import * as Device from 'expo-device';

const OnboardingScreen = props => {
  // useEffect(() => {
  //   console.log("In use effect in onboarding screen")
  // //  trackScreenView('OnboardingScreen');
  // }, []);

  // async function trackScreenView(screen) {
  //   // Set & override the MainActivity screen name
  //   if(await analytics().setCurrentScreen(screen, screen)){}
  //   else{
  //       console.log("Error")
  //   }  }


  useEffect(() => {
    storeData()
  }, []);
  async function storeData() {
    await storeVocabData()
    await storeWordOfTheDayData()
    schedulePushNotification();
  }

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => console.log(token));
  }, []);

  async function registerForPushNotificationsAsync() {
    let token;
  console.log("In register push token")
    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
  
    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        //alert('Failed to get push token for push notification!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      //console.log(token);
    } else {
      alert('Must use physical device for Push Notifications');
    }
  
    return token;
  }  

  return (
    <View style={styles.container}>
      {/* <Image
        style={styles.image}
        source={require('../../images/onboarding-screen-design.png')}
      />

      <Text style={styles.text}>Let's get started</Text>

      <Text style={styles.descriptionText}>
        Learn new words & become a Word Guru
      </Text>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={changeScreen}
        style={styles.buttonContainer}>
        <Ionicons name="arrow-forward-circle-sharp" size={80} color="#000" />
      </TouchableOpacity> */}
      <CarouselCards navigation={props.navigation}/>
    </View>
  );
};

export default OnboardingScreen;
