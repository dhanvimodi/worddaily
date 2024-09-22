import React, {useEffect} from 'react';
import {View, Image, PermissionsAndroid, Platform } from 'react-native';
import analytics from '@react-native-firebase/analytics';

import styles from '../styles/SplashScreen';
import { fetchUserName } from '../utils/username';
import AlarmManager from '../utils/alarmManager';


const SplashScreen = props => {

  let timerRef = React.useRef(null);

    useEffect(()=>{
    timerRef.current = setTimeout(() => {
      changeScreen();
    }, 2000);
 }, []);

   const handleScheduleAlarm = () => {

     AlarmManager.scheduleAlarm();
   };


    const requestNotificationPermission = async () => {
        // console.log('In request permission ')

     
      if (Platform.OS === 'android') {
      //console.log("requesting permission")
        await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS, null);
      } 
    };

    const handlePermissionResponse = async () => {
    //console.log('In handle permission response')
      const status = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
        //console.log(status)
        if (status === true) {

          //console.log('Notification permission granted');
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

    //console.log('In change screen',name);
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
