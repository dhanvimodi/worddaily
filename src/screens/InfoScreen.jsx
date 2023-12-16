import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import analytics from '@react-native-firebase/analytics';
import styles from '../styles/InfoScreen';
import { storeUserName } from '../utils/username';
import { storeWordOfTheDayData } from '../utils/wordOfTheDay';
import { storeVocabData } from '../utils/vocab';

const InfoScreen = props => {
  const [name, setName] = useState('');

  // useEffect(() => {
  //   trackScreenView('InfoScreen');
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

  function changeScreen() {
    if (name) {
      storeName(name);
      props.navigation.replace('HomeScreen', {
        name,
      });
    } else {
      alert('Please enter a name');
    }
  }

  async function storeName(name) {
    await storeUserName(name)
  }

  async function storeData() {
    await storeVocabData()
    await storeWordOfTheDayData()
  }

  return (
    // <Background>
    <View style={styles.container}>
      {/* <Text
          style={{
            marginTop: '20%',
            color: 'black',
            fontSize: 20,
            width: '70%',
            textAlign: 'center',
          }}>
          Grow your vocabulary with a new word daily on Word Guru</Text> */}
      {/* <Text
          style={{
           // color: '#ff6341',
            color:'#7D5713',
            fontSize: 35,
            width: '70%',
            textAlign: 'center',
            fontWeight:"bold",
            fontStyle:"italic"
          }}>
          Word Gurus!
        </Text> */}
      <Text style={styles.heading}>What should we call you?</Text>

      <TextInput
        style={styles.inputBox}
        maxLength={15}
        placeholder="Enter your name"
        placeholderTextColor="#cacaca"
        value={name}
        onChangeText={setName}
      />

      <TouchableOpacity
        activeOpacity={0.9}
        onPress={changeScreen}
        style={styles.buttonContainer}>
        <View
          // source={require('../../images/Button.png')}

          style={styles.buttonInnerContainer}
          // imageStyle={{
          //   height: '100%',
          //   width: '100%',
          // }}
        >
          <Text style={styles.buttonText}>Let's Go!</Text>
        </View>
      </TouchableOpacity>
    </View>
    // {/* </Background> */}
  );
};

export default InfoScreen;
