import React, {useEffect, useState, useRef} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {fetchWordOfTheDayData} from '../utils/wordOfTheDay';
import Tts from 'react-native-tts';
import * as Notifications from 'expo-notifications'
import styles from '../styles/HomeScreen';
import Card from '../components/Card';
import {fetchVocabData} from '../utils/vocab';
import { fetchSatData } from '../utils/sat';
import { ScrollView } from 'react-native-gesture-handler';


const HomeScreen = props => {
  // console.log('HomeScreen')
  // const [name, setName] = useState('');
  const [data, setData] = useState([]);
  const [todaysData, setTodaysData] = useState([]);
  const [satData, setSatData] = useState([]);
  const [isSoundPlaying, setIsSoundPlaying] = useState(false);


  useEffect(() => {
    Tts.addEventListener('tts-start', event => {
      setIsSoundPlaying(true);
    });
    Tts.addEventListener('tts-finish', event => {
      setIsSoundPlaying(false);
    });
  }, []);

  useEffect(() => {
    getWordOfTheDayData();
    getVocabData();
    getSatData();
  }, []);

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      onNavigateBack();
    });

    // Cleanup function to unsubscribe when the component is unmounted
    return () => {
      unsubscribe();
    };
  }, [props.navigation]);


  const playSound = word => {
    if (!isSoundPlaying) {
      Tts.speak(word);
    }
  };

  async function getWordOfTheDayData() {
    // console.log('In fetch word of the day data')
    const todaysData = await fetchWordOfTheDayData();
    setTodaysData(todaysData);
  }

  async function getSatData() {
    // console.log('In fetch word of the day data')
    const satData = await fetchSatData();
    setSatData(satData);
  }

  const onNavigateBack = () => {
    getVocabData();
    getWordOfTheDayData();
    getSatData();
  };

  async function getVocabData() {
    // console.log("In get vocab data")
    const vocabData = await fetchVocabData();
    randomizeData(vocabData);
  }

  function randomizeData(data) {
    const randomizedData = [...data].sort(() => Math.random() - 0.5);
    setData(randomizedData);
    // console.log("In randomize data")
    // console.log(data)
    //setData(data);
  }

  const changeScreen = (screenName, data) => {
    props.navigation.navigate(screenName, {data: data});
  };

  const renderItem = ({ item }) => (
    <Card
      data={item}
      color={'#fff'}
      changeScreen={() => changeScreen('FlashcardScreen', item)}
      listen={() => playSound(item.word)}
    >
      <Text style={styles.cardHeading}>{item.cardHeading}</Text>
      <Text style={styles.word}>{item.word}</Text>
    </Card>
  );

  const combinedData = [
    { cardHeading: "Word of the Day", word: todaysData.word },
    { cardHeading: "Word Bank", word: data[0]?.word },
    { cardHeading: "SAT Vocab", word: satData[0]?.word },
  ];

return(
  <View style={{ flex:1,backgroundColor: "#d1d0f0"}}>
<ScrollView 
        style={styles.scrollView} 
        contentContainerStyle={styles.contentContainer}
        // stickyHeaderHiddenOnScroll={true}
      >
        <View style={{height:'35%'}}>
          <Card
          data={todaysData}
         // color={'#d1d0f0'}
          color={'#fff'}
          changeScreen={() => changeScreen('DailyWordScreen', todaysData)}
          listen={() => playSound(todaysData.word)}>
          <Text style={styles.cardHeading}>Word of the Day</Text>
          <Text style={styles.word} numberOfLines={2}>
            {todaysData.word}
          </Text>
          {/* <WordList data={mockData[0]} /> */}
        </Card>
        </View>
        
        <View style={{height:'35%'}}>
        <Card
          data={satData}
          color={'#fff'}
          changeScreen={() => changeScreen('FlashcardScreen', satData)}
          listen={() => playSound(satData[0].word)}>
          <Text style={styles.cardHeading}>SAT Vocab</Text>

          {satData.length > 0 && satData[0].word && (
            <Text style={styles.word}>{satData[0].word}</Text>
          )}
        </Card>
        </View>
        
        <View style={{height:'35%'}}>
        <Card
          data={todaysData}
          color={'#fff'}
          changeScreen={() => changeScreen('VocabScreen', data)}
          listen={() => playSound(data[0].word)}>
          <Text style={styles.cardHeading}>Word Bank</Text>

          {data.length > 0 && data[0].word && (
            <Text style={styles.word}>{data[0].word}</Text>
          )}
        </Card>
        </View>
      </ScrollView>
      </View>
  )
};
// const styles = StyleSheet.create({
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   scrollView: {
//     height: '100%',
//     width: '100%',
//    // margin: 20,
//     alignSelf: 'center',
//    // padding: 20,
//   },
//   contentContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: "#d1d0f0",
//     paddingBottom: 50
//   }
// });

export default React.memo(HomeScreen);
