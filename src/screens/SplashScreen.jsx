import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import analytics from '@react-native-firebase/analytics';
import { ImagesAssets } from '../../assets/images/ImagesAssets';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Background from '../components/Background';
const SplashScreen = props => {
  useEffect(() => {
   // console.log('In use effect');
    getUser();
  }, []);

  useEffect(() => {
  //  trackScreenView('SplashScreen');
  }, []);

  async function trackScreenView(screen) {
    // Set & override the MainActivity screen name
    try {await analytics().setCurrentScreen(screen, screen)}
    catch(error)
    {
        console.log("error in splash screen" , error)
    }        
    

  }

  function changeScreen(name) {
    if (name) {
      props.navigation.replace('HomeScreen', {
        name,
      });
    } else {
      props.navigation.replace('OnboardingScreen');
    }
  }

  const getUser = async () => {
   // console.log('In get user');
    try {
      await AsyncStorage.getItem('username').then(name => {
        setTimeout(() => {
          changeScreen(name);
        }, 2000);
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Background>
      <View
        style={{
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{
            height: '28%',
            aspectRatio: 4 / 3,
          }}
          source={ImagesAssets.logo}
        />
      </View>
    </Background>
  );
};

export default SplashScreen;