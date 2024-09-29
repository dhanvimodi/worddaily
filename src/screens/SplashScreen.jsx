import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import styles from '../styles/SplashScreen';
import { fetchUserName } from '../utils/username';
import { storeVocabData } from '../utils/vocab';
import { storeWordOfTheDayData } from '../utils/wordOfTheDay';
import { schedulePushNotification } from './NotificationScreen';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import { storeSatData } from '../utils/sat';

const SplashScreen = props => {

  useEffect(() => {
    let name;
   
    const initialize = async () => {
      name = await fetchUserName();

      await registerForPushNotificationsAsync();
      await storeData();

      changeScreen(name);
    };

    initialize();
    
  }, []); 

  async function storeData() {

    await storeVocabData();

    await storeWordOfTheDayData();

    await storeSatData();

  }

  async function registerForPushNotificationsAsync() {
    console.log("In register notification");

    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;

      if (existingStatus !== 'granted') {

        const { status } = await Notifications.requestPermissionsAsync();

        if (Platform.OS === 'android') {
          await Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
          });
        }
        finalStatus = status;
        console.log("Schedule push notifications");

        await schedulePushNotification(); 
      }
      if (finalStatus !== 'granted') {
        return;
      }
    } else {
      alert('Must use a physical device for Push Notifications');
    }
  }

  async function getUserName(){
    var name = await fetchUserName();
    return name?name:null;
  }

  async function changeScreen(name) {
    
    if (name!=null) {
      props.navigation.replace('HomeScreen', { name });
    } else {
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

export default React.memo(SplashScreen);
