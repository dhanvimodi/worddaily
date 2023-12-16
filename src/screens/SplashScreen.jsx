import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import analytics from '@react-native-firebase/analytics';
import * as Notifications from 'expo-notifications';
import {useRoute} from '@react-navigation/native';


import styles from '../styles/SplashScreen';
import { fetchUserName } from '../utils/username';

const SplashScreen = props => {
 // console.log("In splash screen")
  
  const route = useRoute();

 //console.log("lastNotification in splash", lastNotificationResponse)
  // useEffect(() => {
  //   // console.log('In use effect');
  //   name = getUser();
  //   timeoutId = setTimeout(() => {
  //     changeScreen(name);
  //   }, 2000);

  //   return()=>{
  //     clearTimeout(timeoutId)
  //   }
    
  // }, []);
  const lastNotificationResponse = Notifications.useLastNotificationResponse();
  let timerRef = React.useRef(null);
  React.useEffect( () => {
    console.log("In use effect in splash screen")
    console.log(lastNotificationResponse)
    let timeoutId;
   if (
     lastNotificationResponse &&
     lastNotificationResponse.notification.request.content.data &&
     lastNotificationResponse.actionIdentifier === Notifications.DEFAULT_ACTION_IDENTIFIER
   ) {
     // navigate to your desired screen
    // console.log("last notification response found")
    // console.log("Timer ref is ", timerRef)
     if (timerRef.current != null) {
     // console.log("Timer ref is not null")
      clearTimeout(timerRef.current)
    }
     props.navigation.replace('DailyWordScreen', {
      data: lastNotificationResponse.notification.request.content.data
    });
   }
   else{
    //console.log("Setting timer")
    timerRef.current = setTimeout(() => {
      changeScreen();
    }, 2000);

   }
 }, [lastNotificationResponse]);

  useEffect(() => {
    //  trackScreenView('SplashScreen');
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
