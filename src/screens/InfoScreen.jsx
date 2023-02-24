import React, {useState} from 'react';
import {
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Background from '../components/Background';
const InfoScreen = (props) => {
  function changeScreen() {
    props.navigation.navigate('HomeScreen')
  }

  const [name, setName] = useState('');
  return (

    <Background>
        {/* <Image
          style={{
            height: '15%',
            width: '40%',
            marginTop: '15%',
          }}
          source={require('../../images/Logo.png')}
        /> */}

        <Text
          style={{
            marginTop: '20%',
            color: 'white',
            fontSize: 30,
            width: '70%',
            textAlign: 'center',
          //  fontStyle:"italic"
          }}>
          Welcome to our community of</Text>
        <Text
          style={{
            color: '#ff6341',
            fontSize: 35,
            width: '70%',
            textAlign: 'center',
            fontWeight:"bold",
            fontStyle:"italic"
          }}>
          Word Gurus!
        </Text>
        <Text
          style={{
            marginTop:"25%",
            color: 'white',
            fontSize: 22,
            width: '70%',
            letterSpacing: 1,
            textAlign: 'center',
          }}>
          What should we call you?
        </Text>

        <TextInput
          style={{
            height: '7%',
            width: '60%',
            marginTop: '10%',
            borderRadius: 10,
            color: '#000',
            paddingLeft: 10,
            
            fontSize:16,
            borderWidth: 3,
            borderColor: '#ff6341',
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
                fontSize: 28,
                textAlign: 'center',
              }}>
              Let's Go!
            </Text>
          </ImageBackground>
        </TouchableOpacity>
        </Background>
  );
};

export default InfoScreen;
