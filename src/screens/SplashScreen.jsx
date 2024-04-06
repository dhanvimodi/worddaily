import React, {useEffect} from 'react';
import {View, Image, PermissionsAndroid, Platform } from 'react-native';
import analytics from '@react-native-firebase/analytics';
// import * as Notifications from 'expo-notifications';
import {useRoute} from '@react-navigation/native';
import PushNotification from 'react-native-push-notification';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { PermissionsAndroid, Platform } from 'react-native';

import styles from '../styles/SplashScreen';
import { fetchUserName } from '../utils/username';
import AlarmManager from '../utils/alarmManager';


const SplashScreen = props => {
  console.log("In splash screen")
  const route = useRoute();

  let timerRef = React.useRef(null);
  let timeoutId;

    useEffect(()=>{
    timerRef.current = setTimeout(() => {
      changeScreen();
    }, 2000);
 }, []);

   const handleScheduleAlarm = () => {

     AlarmManager.scheduleAlarm();
   };


    const requestNotificationPermission = async () => {
        console.log('In request permission ')

      const options = {
        title: 'Notification Permission',
        message: 'This app needs permission to send notifications.',
        buttonPositive: 'Allow',
        buttonNegative: 'Deny',
      };

      if (Platform.OS === 'android') {
      console.log("requesting permission")
        await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS, null);
      } else {
        await Permissions.request('notification', options);
      }
    };

    const handlePermissionResponse = async () => {
    console.log('In handle permission response')
      const status = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
        console.log(status)
        if (status === true) {

          console.log('Notification permission granted');
          // Perform actions requiring notification permission (e.g., setting up notification listeners)
        } else {
        requestNotificationPermission()
        handleScheduleAlarm()
        }
      };

      useEffect(() => {
        handlePermissionResponse();
      }, []);

  async function trackScreenView(screen) {
    // Set & override the MainActivity screen name
    try {
      await analytics().setCurrentScreen(screen, screen);
    } catch (error) {
      console.log('error in splash screen', error);
    }
  }
  async function changeScreen() {
    const name= await fetchUserName();

    console.log('In change screen',name);
     if (name) {
      //console.log("Go to home screen")
      
      props.navigation.replace('HomeScreen', {
        name,
      });
    } else {
      //console.log("Go to onboarding screen")
      props.navigation.replace('OnboardingScreen');
    }
  }


  const getUser = async () => {
    console.log("In get user",name)
    console.log("Setting timer")
    
  
  };
  
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../images/splash-screen.png')}
      />
    </View>
  );
};

export default SplashScreen;
