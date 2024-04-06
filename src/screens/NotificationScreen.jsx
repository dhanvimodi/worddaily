// // import { useState, useEffect, useRef } from 'react';
// // import { Text, View, Button, Platform } from 'react-native';
// // import * as Device from 'expo-device';
// // import * as Notifications from 'expo-notifications';
//  import { fetchVocabData } from '../utils/vocab';
// // import { useNavigation } from '@react-navigation/native';

// // Notifications.setNotificationHandler({
// //   handleNotification: async () => ({
// //     shouldShowAlert: true,
// //     shouldPlaySound: false,
// //     shouldSetBadge: false,
// //   }),
// // });

// // export default function NotificationScreen(props) {
// //   const [expoPushToken, setExpoPushToken] = useState('');
// //   const [notification, setNotification] = useState(false);
// //   const notificationListener = useRef();
// //   const responseListener = useRef();

// //   const navigation = useNavigation();

// //   useEffect(() => {
    

// //     // registerForPushNotificationsAsync().then(token => 
// //     //   //setExpoPushToken(token)
// //     //   console.log('TOKEN', token));

// //     notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
// //      // setNotification(notification);
// //      console.log('Notification received', notification)
// //     });

   
// //     responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
// //      // props.navigation.navigate()
// //      console.log('Notification clicked');
// //      navigation.navigate('DailyWordScreen', {data: response.notification.request.content.data});
// //     });

// //     return () => {
// //       Notifications.removeNotificationSubscription(notificationListener.current);
// //        Notifications.removeNotificationSubscription(responseListener.current);
// //     };
// //   }, []);


  
// //   // async function registerForPushNotificationsAsync() {
// //   //   let token;
  
// //   //   if (Platform.OS === 'android') {
// //   //     await Notifications.setNotificationChannelAsync('default', {
// //   //       name: 'default',
// //   //       importance: Notifications.AndroidImportance.MAX,
// //   //       vibrationPattern: [0, 250, 250, 250],
// //   //       lightColor: '#FF231F7C',
// //   //     });
// //   //   }
  
// //   //   if (Device.isDevice) {
// //   //     const { status: existingStatus } = await Notifications.getPermissionsAsync();
// //   //     let finalStatus = existingStatus;
// //   //     if (existingStatus !== 'granted') {
// //   //       const { status } = await Notifications.requestPermissionsAsync();
// //   //       finalStatus = status;
// //   //     }
// //   //     if (finalStatus !== 'granted') {
// //   //    //   alert('Failed to get push token for push notification!');
// //   //       return;
// //   //     }
// //   //     token = (await Notifications.getExpoPushTokenAsync()).data;
// //   //     console.log("Token is ",token);
// //   //   } else {
// //   //     alert('Must use physical device for Push Notifications');
// //   //   }
  
// //   //   return token;
// //   // }  

// // }
// async function getData(){
//   const data = await fetchVocabData()
//   const randomIndex= Math.floor(Math.random()*data.length)
//   return data[randomIndex]
// }

// // export async function schedulePushNotification() {
// //   const schedule = new Date();  
// //   console.log("In schedule push notification")
    
// //   // schedule.setHours(19);
// //   // schedule.setMinutes(19);

// //   const data=await getData()
// //   await Notifications.scheduleNotificationAsync({
// //     content: {
// //       title: "You've got new word! 📬",
// //       body: `${data.word} : ${data.meaning}`,
// //       data: data
// //     },
// //     trigger: {
// //      // hour: 10,
// //       // minute: 2, 
// //       seconds:60*2,
// //       repeats: true 
// //     },
// //   });
// // }

// import { Notifications } from 'expo';
// import * as ExpoNotifications from 'expo-notifications'
// import * as Device from 'expo-device';
// import { useRef, useEffect } from 'react';
// //import * as Permissions from 'expo-permissions';

// // Function to request notification permissions





// async function getNotificationPermission() {
//   const { status } = await Notifications.getPermissionsAsync();
//   if (status !== 'granted') {
//     const { status: newStatus } = await ExpoNotifications.requestPermissionsAsync();
//     if (newStatus !== 'granted') {
//       console.log('Notification permission denied!');
//       return false;
//     }
//   }
//   return true;
// }

// async function registerForPushNotificationsAsync() {
//     //let token;
//   console.log("In register push token")
//     if (Platform.OS === 'android') {
//       await ExpoNotifications.setNotificationChannelAsync('default', {
//         name: 'default',
//         importance: ExpoNotifications.AndroidImportance.MAX,
//         vibrationPattern: [0, 250, 250, 250],
//         lightColor: '#FF231F7C',
//       });
//     }
  
//     if (Device.isDevice) {
//       const { status: existingStatus } = await ExpoNotifications.getPermissionsAsync();
//       let finalStatus = existingStatus;
//       if (existingStatus !== 'granted') {
//         const { status } = await ExpoNotifications.requestPermissionsAsync();
//         finalStatus = status;
//       }
//       if (finalStatus !== 'granted') {
//         //alert('Failed to get push token for push notification!');
//         return false;
//       }
//      // token = (await ExpoNotifications.getExpoPushTokenAsync()).data;
//       //console.log(token);
//     } else {
//       alert('Must use physical device for Push Notifications');
//     }
  
//     return true;
//   }  

//   async function getScheduled() {
//     console.log("getting schedfuled notifcation");

//     const slay = await ExpoNotifications.getAllScheduledNotificationsAsync();
//     console.log("scheduled:");
//     console.log(slay);
//   }
// // Function to schedule a notification
//  async function scheduleNotification() {

//   console.log("In schedule notification method")

//  // const notificationId = Math.floor(Math.random() * 1000); // Generate a unique ID for each notification

//   data=await getData()

//   const notificationContent = {
//     title: "You've got new word! 📬",
//     body: `${data.word} : ${data.meaning}`,
//     data: data
//     // You can customize other fields like sound, badge, etc.
//   };
//   console.log("Notification content is ", notificationContent)
  
//   const schedulingOptions = {
//     time: new Date().getTime() + 5000, // Schedule the notification 5 seconds from now (adjust as needed)
//   };


//   await ExpoNotifications.scheduleNotificationAsync({
//     content: notificationContent,
//     trigger: {
//       seconds: 60,
//       repeats: true,
//     },
//   });

//   console.log('Notification scheduled:', notificationContent);


//   // await ExpoNotifications.cancelAllScheduledNotificationsAsync();
//    getScheduled();

// }

// // Main function to set up and schedule notifications
// export async function setupNotifications() {
//   // Check and request notification permissions
//   const hasPermission = await registerForPushNotificationsAsync();
// console.log("has permission = ", hasPermission)
//   if (hasPermission) {
//     console.log("going to schedule permission")
//     // Schedule a notification
//     await scheduleNotification();
//   }
// }

// // Call the main function to set up and schedule notifications

