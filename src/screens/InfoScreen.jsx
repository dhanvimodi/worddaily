import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import analytics from '@react-native-firebase/analytics';

import Background from '../components/Background';

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

  return (
    <Background>
      <View
        style={{
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
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
        <Text
          style={{
            marginTop: '15%',
            color: '#000',
            fontSize: 22,
            width: '70%',
            letterSpacing: 2,
            textAlign: 'center',
            fontFamily: 'Montserrat-Regular',
          }}>
          What should we call you?
        </Text>

        <TextInput
          style={{
            height: '7%',
            width: '60%',
            marginTop: '15%',
            borderRadius: 10,
            color: '#000',
            paddingLeft: 10,
            fontFamily: 'Montserrat-Regular',
            fontSize: 16,
            borderBottomWidth: 3,
            borderRightWidth: 3,
            borderBottomColor: '#000',
            borderRightColor: '#000',
            //borderColor: '#e5c84c',
            backgroundColor: 'white',
          }}
          maxLength={15}
          placeholder="Enter your name"
          placeholderTextColor="#cacaca"
          value={name}
          onChangeText={setName}
        />

        <TouchableOpacity
          activeOpacity={0.9}
          onPress={changeScreen}
          style={{
            marginTop: '40%',
            height: '10%',
            width: '60%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            // source={require('../../images/Button.png')}

            style={{
              backgroundColor: '#162016',
              height: '100%',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 7,
            }}
            // imageStyle={{
            //   height: '100%',
            //   width: '100%',
            // }}
          >
            <Text
              style={{
                color: 'white',
                fontSize: 28,
                textAlign: 'center',
                fontFamily: 'Montserrat-Regular',
              }}>
              Let's Go!
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

export default InfoScreen;
