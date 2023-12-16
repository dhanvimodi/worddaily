import React, { useState, useEffect, useRef } from 'react';
import { NavigationContainer, useNavigationContainerRef, CommonActions } from '@react-navigation/native';
import { createStackNavigator, StackActions } from '@react-navigation/stack';

import HomeScreen from "./src/screens/HomeScreen";
import OnboardingScreen from "./src/screens/OnboardingScreen";
import SplashScreen from './src/screens/SplashScreen';
import InfoScreen from './src/screens/InfoScreen';
import analytics from '@react-native-firebase/analytics';
import DailyWordScreen from './src/screens/DailyWordScreen';
import VocabScreen from './src/screens/VocabScreen';
import Header from './src/components/Header';
import ProfileScreen from './src/screens/ProfileScreen';
import FavoriteScreen from './src/screens/FavoriteScreen';
import NotificationScreen from './src/screens/NotificationScreen';
import * as Notifications from 'expo-notifications';


const Stack = createStackNavigator();

const App = (props) => {

  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef();

  const lastNotificationResponse = Notifications.useLastNotificationResponse();
//  console.log("lastNotification",lastNotificationResponse)
//   React.useEffect(() => {
//      console.log("In use effect")
//      //console.log(lastNotificationResponse)
//     if (
//       lastNotificationResponse &&
//       lastNotificationResponse.notification.request.content.data &&
//       lastNotificationResponse.actionIdentifier === Notifications.DEFAULT_ACTION_IDENTIFIER
//     ) {
//       // navigate to your desired screen
//       console.log("In if condition")
//      // console.log(navigationRef)
//       //navigationRef.navigate()
//       // navigationRef.setParams({data:lastNotificationResponse.notification.request.content.data})
//       // navigationRef.resetRoot({
//       //   index: 0,
//       //   routes: [{ name: 'DailyWordScreen',
//       //   params: {
//       //           data: lastNotificationResponse.notification.request.content.data,
//       //         },
//       // }],
//       // });
// //navigationRef.navigate('DailyWordScreen', {data: lastNotificationResponse.notification.request.content.data});

// navigationRef.dispatch(
//         CommonActions.reset({
//           routes:[{
//           name: 'DailyWordScreen',
//           params: {
//             data: lastNotificationResponse.notification.request.content.data,
//           },
//         }]
//       })
//       );
      
//      // navigationRef.navigate('DailyWordScreen', {data: lastNotificationResponse.notification.request.content.data});
//     }
//   }, [lastNotificationResponse]);

  return (
    <NavigationContainer
    ref={navigationRef}
    onReady={() => {
      routeNameRef.current = navigationRef.getCurrentRoute().name;
    }}
    onStateChange={async () => {
      const previousRouteName = routeNameRef.current;
      const currentRouteName = navigationRef.getCurrentRoute().name;

      if (previousRouteName !== currentRouteName) {
        // Save the current route name for later comparison
        routeNameRef.current = currentRouteName;
        await analytics().logScreenView({
          screen_name: currentRouteName,
          screen_class: currentRouteName,
        });
        // Replace the line below to add the tracker from a mobile analytics SDK
      
      
      }
    }}
  >
      <Stack.Navigator
       screenOptions={
      
        {
        // headerStyle:{
        //   backgroundColor:'#dfdfdf'
        // },
         header: ({navigation}) => <Header navigation={navigation} />,
       }}
      >
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
          options={{headerShown:true}}
        />
        <Stack.Screen
          name="DailyWordScreen"
          component={DailyWordScreen}
          options={{headerShown:false}}
        />
         <Stack.Screen
          name="VocabScreen"
          component={VocabScreen}
          options={{headerShown:false}}
        />
          <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{headerShown:true}}
        />
        <Stack.Screen
          name="FavoriteScreen"
          component={FavoriteScreen}
          options={{headerShown:true}}
        />
        <Stack.Screen
          name="NotificationScreen"
          component={NotificationScreen}
          options={{headerShown:true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



//const Stack = createStackNavigator();


// const App = (props) => {

 
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//       <Stack.Screen
//           name="SplashScreen"
//           component={SplashScreen}
//           options={{headerShown:false}}
//         />
//       <Stack.Screen
//           name="OnboardingScreen"
//           component={OnboardingScreen}
//           options={{headerShown:false}}
//         />
//         <Stack.Screen
//           name="InfoScreen"
//           component={InfoScreen}
//           options={{headerShown:false}}
//         />
//         <Stack.Screen
//           name="HomeScreen"
//           component={HomeScreen}
//           options={{headerShown:false}}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

export default App;