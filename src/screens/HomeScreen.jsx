import React, { useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import Background from '../components/Background';
import {getData} from '../utils/helperFunctions';
import analytics from '@react-native-firebase/analytics';

const HomeScreen = props => {
  const [name, setName] = useState(props.route.params.name);
  const [data, setData] = useState({});

  useEffect(() => {
    trackScreenView('HomeScreen');
  }, []);

  async function trackScreenView(screen) {
    // Set & override the MainActivity screen name
    await analytics().setCurrentScreen(screen, screen);
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    todaysData = await getData();
    setData(todaysData);
  }
  return (
    <Background>
      <View
        style={{
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'flex-start',
          // marginLeft:"10%",
          // width:"50%",
          //  backgroundColor:"pink"
        }}>
        <View
          style={{
            marginLeft: '10%',
            width: '80%',
            height: '100%',
            // justifyContent:"center"
          }}>
          <Text
            style={{
              color: '#1e1e1e',
              fontWeight: 'bold',
              letterSpacing: 2,
              fontSize: 20,
              marginTop: '30%',
            }}>
            Hi {name},
          </Text>
          <View
            style={{
              // justifyContent:"center",
              height: '70%',
              //backgroundColor:"pink"
            }}>
            <Text
              style={{
                marginTop: '20%',
                color: '#162016',
                letterSpacing: 3,
                fontSize: 18,
              }}>
              word of the day :
            </Text>
            <Text
              style={{
                color: '#000',
                letterSpacing: 2,
                fontSize: 32,
                fontWeight: 'bold',
                marginTop: '10%',
                fontFamily: 'Montserrat-Bold',
              }}>
              {data.word}
            </Text>

            <Text
              style={{
                color: '#162017',
                letterSpacing: 3,
                fontSize: 18,
                marginTop: '3%',
              }}>
              {data.phonetic}
            </Text>
            <Text
              style={{
                color: '#162017',
                letterSpacing: 3,
                fontSize: 18,
                marginTop: '2%',
              }}>
              {data.partOfSpeech}
            </Text>
            <Text
              style={{
                color: '#000',
                fontSize: 21,
                marginTop: '10%',
                letterSpacing: 2,
                fontFamily: 'Montserrat-Medium',
              }}>
              {data.meaning}
            </Text>

            <Text
              style={{
                color: '#000',
                fontSize: 19,
                marginTop: '15%',
                letterSpacing: 2,
                fontFamily: 'Montserrat-Regular',
              }}>
              {data.sentence}
            </Text>
          </View>
        </View>
      </View>
    </Background>
  );
};
{
  /* <View
        style={{
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: '70%',
            width: '90%',
            backgroundColor: '#e2ce37',
            borderRadius: 40,
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: '#c2af29',
            // IOS specific
            shadowOffset: {width: 0, height: 1},
            shadowOpacity: 0.8,
            shadowRadius: 2,
            // Android specific
            elevation: 15,
          }}>
         
          <View
            style={{
              alignItems:'center',
              
              height: '96%',
              width: '94%',
              backgroundColor: '#f7f8f9',
              borderRadius: 40,
              shadowColor: 'black',
              //IOS specific
              shadowOffset: {width: 0, height: 1},
              shadowOpacity: 0.8,
              shadowRadius: 2,
              // Andorid specific
              elevation: 5,
            }}>

<View
             style={{
             
              height: '15%',
              width: '20%',
              
            marginTop:"-10%",
              backgroundColor: '#e2ce37',
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center',
              shadowColor: '#c2af29',
              // IOS specific
              shadowOffset: {width: 0, height: 1},
              shadowOpacity: 0.8,
              shadowRadius: 2,
              // Android specific
              elevation: 15,
            }}>

            </View>

            </View>
        </View>
      </View> */
}
export default HomeScreen;
