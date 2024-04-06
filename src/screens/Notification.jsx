// import AsyncStorage from '@react-native-async-storage/async-storage';
// import * as Notifications from 'expo-notifications';
// import * as Permissions from 'expo-permissions';
// import { fetchVocabData } from '../utils/vocab';


// async function getData(){
//     const data = await fetchVocabData()
//     let randomIndex= Math.floor(Math.random()*data.length)
//     return data[randomIndex]
//   }

// export let scheduleDailyNotification = async() =>{
//   // Check for permissions
//   const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
//   if (status !== 'granted') {
//     console.log('Permission to receive notifications was denied');
//     return;
//   }

//   console.log("In schedule notification");
//   // Get today's date
//   const today = new Date();
//   //today.setHours(0, 0, 0, 0);

//   console.log("todays date", today.toISOString())
//   // Check if the notification for today has been scheduled
//   const scheduledDate = await AsyncStorage.getItem('scheduledDate');

//   console.log(" schedule date", scheduledDate);
//   if (scheduledDate !== today.toISOString()) {
//     // If not scheduled for today, generate a random message index
//     // const messages = ['Message 1', 'Message 2', 'Message 3'];
//     // const randomIndex = Math.floor(Math.random() * messages.length);
//     // const randomMessage = messages[randomIndex];

//     data=await getData()

//     const notificationContent = {
//       title: "You've got new word! 📬",
//       body: `${data.word} : ${data.meaning}`,
//       data: data
//       // You can customize other fields like sound, badge, etc.
//     };

//     // Schedule the notification
//     let noti = await Notifications.scheduleNotificationAsync({
//       content: notificationContent,
//       trigger: {
//         //hour: 8,
//         seconds: 60,
//         repeats: true,
//       },
//     });


//     console.log("notification scheduled", noti);

//     // Store the scheduled date and message index
//     await AsyncStorage.setItem('scheduledDate', today.toISOString());
//     await AsyncStorage.setItem('randomMessageIndex', String(randomIndex));
//   }
// }
