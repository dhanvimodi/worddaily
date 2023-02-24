import React from 'react';
import {
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import Background from '../components/Background';

const OnboardingScreen = props => {
  function changeScreen() {
    props.navigation.replace('InfoScreen');
  }
  return (
    <Background>
      <Image
        style={{
          height: '25%',
          aspectRatio:1.8/2,
         // width: '50%',
          marginTop:"20%"
        }}
        source={require('../../images/Book.png')}
      />

      <Text
        style={{
          marginTop: '20%',
          color: 'white',
          fontSize: 44,
          width: '70%',
          letterSpacing: 1,
          textAlign: 'center',
        }}>
        Welcome!
      </Text>

      <Text
        style={{
          marginTop: "6%",
          color: 'white',
          fontSize: 20,
          width: '70%',
          letterSpacing: 1,
          textAlign: 'center',
        }}>
        Learn a new word daily & become a Word Guru
      </Text>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={changeScreen}
        style={{
          marginTop: '30%',
          height: '12%',
          width: '70%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ImageBackground
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
        </ImageBackground>
      </TouchableOpacity>
    </Background>
  );
};

export default OnboardingScreen;
