import React, {useEffect} from 'react';
import {Text, TouchableOpacity, Image, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import analytics from '@react-native-firebase/analytics';

import Background from '../components/Background';
import styles from '../styles/OnboardingScreen';

const OnboardingScreen = props => {
  // useEffect(() => {
  //   console.log("In use effect in onboarding screen")
  // //  trackScreenView('OnboardingScreen');
  // }, []);

  // async function trackScreenView(screen) {
  //   // Set & override the MainActivity screen name
  //   if(await analytics().setCurrentScreen(screen, screen)){}
  //   else{
  //       console.log("Error")
  //   }  }

  function changeScreen() {
    props.navigation.replace('InfoScreen');
  }

  return (
    // <Background>
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../images/onboarding-screen-design.png')}
      />

      <Text style={styles.text}>Let's get started</Text>

      <Text style={styles.descriptionText}>
        Learn new words & become a Word Guru
      </Text>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={changeScreen}
        style={styles.buttonContainer}>
        <Ionicons name="arrow-forward-circle-sharp" size={80} color="#000" />
        {/* <ImageBackground
          source={require('../../images/Button.png')}
          style={{
            height: '100%',
            width: '100%',
            //   backgroundColor:"pink",
            alignItems: 'center',
            justifyContent: 'center',
          }}
          imageStyle={{
            height: '100%',
            width: '100%',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 24,
              textAlign: 'center',
              fontWeight:"bold"
            }}>
            Get Started
          </Text>
        </ImageBackground> */}
      </TouchableOpacity>
    </View>
    // {/* </Background> */}
  );
};

export default OnboardingScreen;
