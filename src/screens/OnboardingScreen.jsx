import React, { useEffect } from 'react';
import { View } from 'react-native';
import styles from '../styles/OnboardingScreen';
import CarouselCards from '../components/Carousel';
import { storeVocabData } from '../utils/vocab';
import { storeWordOfTheDayData } from '../utils/wordOfTheDay';
import { schedulePushNotification } from './NotificationScreen';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';

const OnboardingScreen = (props) => {

  return (
    <View style={styles.container}>
      <CarouselCards navigation={props.navigation} />
    </View>
  );
};

export default React.memo(OnboardingScreen);
