import React from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import analytics from '@react-native-firebase/analytics';

import Background from '../components/Background';
const OnboardingScreen = props => {
  useEffect(() => {
    trackScreenView('OnboardingScreen');
  }, []);

  async function trackScreenView(screen) {
    // Set & override the MainActivity screen name
    await analytics().setCurrentScreen(screen, screen);
  }

  function changeScreen() {
    props.navigation.replace('InfoScreen');
  }

  return (
    <Background>
      <Image
        style={{
          height: '35%',
          aspectRatio: 1.8 / 2,
          // width: '50%',
          marginTop: '10%',
        }}
        source={require('../../images/onboarding-screen-design.png')}
      />

      <Text
        style={{
          marginTop: '10%',
          color: 'black',
          fontSize: 45,
          width: '70%',
          letterSpacing: 1,
          // textAlign: 'center',
        }}>
        Let's get started
      </Text>

      <Text
        style={{
          marginTop: '6%',
          color: 'black',
          fontSize: 20,
          width: '70%',
          letterSpacing: 1,
          //textAlign: 'center',
        }}>
        Learn a new word daily & become a Word Guru
      </Text>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={changeScreen}
        style={{
          marginTop: '15%',
          alignSelf: 'flex-end',
          marginRight: '15%',
        }}>
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
    </Background>
  );
};

export default OnboardingScreen;
