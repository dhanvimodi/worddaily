import { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform } from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { fetchVocabData } from '../utils/vocab';
import { useNavigation } from '@react-navigation/native';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function NotificationScreen(props) {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  const navigation = useNavigation();

  useEffect(() => {
    

    // registerForPushNotificationsAsync().then(token => 
    //   //setExpoPushToken(token)
    //   console.log('TOKEN', token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
     // setNotification(notification);
    });

   
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
     // props.navigation.navigate()
     console.log('Notification clicked');
     navigation.navigate('DailyWordScreen', {data: response.notification.request.content.data});
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
       Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);


  
  // async function registerForPushNotificationsAsync() {
  //   let token;
  
  //   if (Platform.OS === 'android') {
  //     await Notifications.setNotificationChannelAsync('default', {
  //       name: 'default',
  //       importance: Notifications.AndroidImportance.MAX,
  //       vibrationPattern: [0, 250, 250, 250],
  //       lightColor: '#FF231F7C',
  //     });
  //   }
  
  //   if (Device.isDevice) {
  //     const { status: existingStatus } = await Notifications.getPermissionsAsync();
  //     let finalStatus = existingStatus;
  //     if (existingStatus !== 'granted') {
  //       const { status } = await Notifications.requestPermissionsAsync();
  //       finalStatus = status;
  //     }
  //     if (finalStatus !== 'granted') {
  //    //   alert('Failed to get push token for push notification!');
  //       return;
  //     }
  //     token = (await Notifications.getExpoPushTokenAsync()).data;
  //     console.log("Token is ",token);
  //   } else {
  //     alert('Must use physical device for Push Notifications');
  //   }
  
  //   return token;
  // }  

}
async function getData(){
  const data = await fetchVocabData()
  const randomIndex= Math.floor(Math.random()*data.length)
  return data[randomIndex]
}

export async function schedulePushNotification() {
  const schedule = new Date();  
  console.log("In schedule push notification")
    
  // schedule.setHours(19);
  // schedule.setMinutes(19);

  const data=await getData()
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "You've got new word! 📬",
      body: `${data.word} : ${data.meaning}`,
      data: data
    },
    trigger: {
      hour: 10, minute: 0, 
     // seconds:15,
      repeats: true 
    },
  });
}