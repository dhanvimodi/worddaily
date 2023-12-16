/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import notifee, { EventType } from '@notifee/react-native';
import {name as appName} from './app.json';

// notifee.onBackgroundEvent(async ({ type, detail }) => {
//     const { notification, pressAction } = detail;
  
//     // Check if the user pressed the "Mark as read" action
//     if (type === EventType.PRESS) {
//       // Update external API
//       console.log('User pressed notification', notification);
  
//       // Remove the notification
//       await notifee.cancelNotification(notification.id);
//     }
//   });

AppRegistry.registerComponent(appName, () => App);
