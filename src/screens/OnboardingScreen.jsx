import React, {useEffect, useRef} from 'react';
import {Text, TouchableOpacity, Image, View} from 'react-native';

//import analytics from '@react-native-firebase/analytics';

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

  const notificationListener = useRef();


  useEffect(()=>{
    storeData()
  },[])

  
  async function storeData() {
    await storeVocabData()
    await storeWordOfTheDayData()
   
  }; // Run only once on mount






  return (
    <View style={styles.container}>
      <CarouselCards navigation={props.navigation}/>
    </View>
  );
    };

export default OnboardingScreen;
