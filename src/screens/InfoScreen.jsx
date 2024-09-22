import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
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
    <View style={styles.container}>
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
          style={styles.buttonInnerContainer}
        >
          <Text style={styles.buttonText}>Let's Go!</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default InfoScreen;
