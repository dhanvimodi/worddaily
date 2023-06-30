import React, {useEffect, useState, useRef} from 'react';
import {Text, View} from 'react-native';
import {getData} from '../utils/helperFunctions';
import analytics from '@react-native-firebase/analytics';
import Tts from 'react-native-tts';

import styles from '../styles/HomeScreen';
import mockData from '../../mockData/mockData.json';
import WordList from '../components/WordList';
import Card from '../components/Card';

const HomeScreen = props => {
  const [name, setName] = useState(props.route.params.name);
  const [data, setData] = useState(mockData);
  const [todaysData, setTodaysData] = useState([]);

  // useEffect(() => {

  //   trackScreenView('HomeScreen');
  // }, []);

  // async function trackScreenView(screen) {
  //   // Set & override the MainActivity screen name
  //   if(await analytics().setCurrentScreen(screen, screen)){}
  //   else{
  //       console.log("Error")
  //   }
  // }

  useEffect(() => {
    fetchData();
    randomizeData();
  }, []);

  async function fetchData() {
    const [todaysData, numberOfDaysVisited] = await getData();
    setTodaysData(todaysData);
    try {
      await analytics().logEvent('data_retrieved', {
        data: todaysData,
        numberOfDaysVisited: numberOfDaysVisited,
      });
    } catch (error) {
      console.log(error);
    }
  }

  function randomizeData() {
    const randomizedData = [...data].sort(() => Math.random() - 0.5);
    setData(randomizedData);
  }

  const renderItem = ({item, index}) => {
    return <WordList data={item} />;
  };

  const changeScreen = (screenName, data) => {
    props.navigation.navigate(screenName, {data: data});
  };

  const playSound = word => {
    Tts.speak(word);
  };

  return (
    // <Background>
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.name}>Hi {name}!</Text>
        {/* <Text
          style={{
            color: '#1e1e1e',
            letterSpacing: 2,
           // fontWeight: 'bold',
            fontSize: 18,
            marginTop: '10%',
            fontFamily: 'Montserrat-Medium',
          }}>
          Practice English
        </Text> */}
        {/* <Text
          style={{
            color: '#1e1e1e',
            letterSpacing: 2,
           // fontWeight: 'bold',
            fontSize: 16,
            marginTop: '12%',
            fontFamily: 'Montserrat-Regular',
          }}>
          Welcome to AWordGuru!
        </Text> */}

        <Card
          data={todaysData}
          changeScreen={() => changeScreen('DailyWordScreen', todaysData)}
          listen={() => playSound(todaysData.word)}>
          <Text style={styles.cardHeading}>word of the day</Text>
          <Text style={styles.word}>{todaysData.word}</Text>
          {/* <WordList data={mockData[0]} /> */}
        </Card>
        <Card
          data={todaysData}
          changeScreen={() => changeScreen('VocabScreen', data)}
          listen={() => playSound(data[0].word)}>
          <Text style={styles.cardHeading}>vocabulary</Text>
          <Text style={styles.word}>{data[0].word}</Text>
          {/* <WordList data={mockData[0]} /> */}
        </Card>
      </View>
    </View>
    // </Background>
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
