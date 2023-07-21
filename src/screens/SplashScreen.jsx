import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import analytics from '@react-native-firebase/analytics';

import styles from '../styles/SplashScreen';
import { fetchUserName } from '../utils/username';

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
    try {
      await analytics().setCurrentScreen(screen, screen);
    } catch (error) {
      console.log('error in splash screen', error);
    }
  }

  function changeScreen(name) {
    console.log('In change screen',name);
    if (name) {
      props.navigation.replace('HomeScreen', {
        name,
      });
    } else {
      props.navigation.replace('OnboardingScreen');
    }
  }

  const getUser = async () => {
    const name= await fetchUserName();

    setTimeout(() => {
            changeScreen(name);
          }, 2000);
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
