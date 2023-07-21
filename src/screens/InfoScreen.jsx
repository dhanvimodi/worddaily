import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import analytics from '@react-native-firebase/analytics';

import Background from '../components/Background';
import styles from '../styles/InfoScreen';
import vocab from '../../mockData/vocab.json'
import wordOfTheDayData from '../../mockData/wordOfTheDayData.json'

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
    todaysDate = new Date().getDate().toString();
    try {
      await AsyncStorage.setItem('username', name);
      await AsyncStorage.setItem('lastUpdatedDate', todaysDate);
      await AsyncStorage.setItem('numberOfDaysVisited', '0');
    } catch (error) {
      console.log(error);
    }
  }

  async function storeData() {
    console.debug("Storing data")
    try{
      console.debug("Storing vocab data")
      await AsyncStorage.setItem('vocab', JSON.stringify(vocab));
    }
    catch(error){
      console.log(error)
    }

    try{
      console.debug("Storing word of the day data")

      await AsyncStorage.setItem('wordOfTheDay', JSON.stringify(wordOfTheDayData));
    }
    catch(error){
      console.log(error)
    }
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
