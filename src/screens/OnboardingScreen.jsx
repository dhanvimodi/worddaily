import React, {useEffect} from 'react';
import {Text, TouchableOpacity, Image, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import analytics from '@react-native-firebase/analytics';

import Background from '../components/Background';
import styles from '../styles/OnboardingScreen';
import CarouselCards from '../components/Carousel';
import { storeVocabData } from '../utils/vocab';
import { storeWordOfTheDayData } from '../utils/wordOfTheDay';

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

  useEffect(() => {
    storeData()
  }, []);
  async function storeData() {
    await storeVocabData()
    await storeWordOfTheDayData()
  }

  return (
    <View style={styles.container}>
      {/* <Image
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
      </TouchableOpacity> */}
      <CarouselCards navigation={props.navigation}/>
    </View>
  );
};

export default OnboardingScreen;
