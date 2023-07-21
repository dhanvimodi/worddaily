import React, {useEffect, useState} from 'react';
import {Text, View, Dimensions} from 'react-native';
import {fetchWordOfTheDayData} from '../utils/wordOfTheDay';
import analytics from '@react-native-firebase/analytics';
import Tts from 'react-native-tts';
import styles from '../styles/HomeScreen';
import Card from '../components/Card';
import {fetchVocabData} from '../utils/vocab';

const HomeScreen = props => {

  console.log("Home Screen")

  // const [name, setName] = useState('');
  const [data, setData] = useState([]);
  const [todaysData, setTodaysData] = useState([]);
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
    //  getUser()
    getWordOfTheDayData();
    getVocabData();
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
    const [todaysData, numberOfDaysVisited] = await fetchWordOfTheDayData();
    setTodaysData(todaysData);
  }

  const onNavigateBack = () => {
    getVocabData();
    getWordOfTheDayData();
  };

  async function getVocabData() {
    // console.log("In get vocab data")
    const vocabData = await fetchVocabData();
    randomizeData(vocabData);
  }

  function randomizeData(data) {
    // const randomizedData = [...data].sort(() => Math.random() - 0.5);
    // setData(randomizedData);
    // console.log("In randomize data")
    // console.log(data)
    setData(data);
  }

  const changeScreen = (screenName, data) => {
    props.navigation.navigate(screenName, {data: data});
  };

  // const getUser = async () => {
  //   const name= await fetchUserName()
  //   setName(name)
  // };

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
  return (
    <View style={styles.container}>
      {/* <View style={{
        width:'100%',
       // height:'10%',
           backgroundColor:'#FF8551',
          //  padding:'5%',
            paddingTop:'7%',
        paddingBottom:'7%',
          //  paddingBottom:'7%',
          justifyContent:'center',
          alignItems:'center',
           borderColor:'#000',
           borderWidth:2,
          // marginBottom:'2%',
           borderBottomLeftRadius:25,
           borderBottomRightRadius:25,
        }}>
        <Text style={styles.name}>Hi {name}!</Text>
        </View> */}
      <View style={styles.innerContainer}>
        <Card
          data={todaysData}
          color={'#FFDEDE'}
          changeScreen={() => changeScreen('DailyWordScreen', todaysData)}
          listen={() => playSound(todaysData.word)}>
          <Text style={styles.cardHeading}>word of the day</Text>
          <Text style={styles.word} numberOfLines={2}>
            {todaysData.word}
          </Text>
          {/* <WordList data={mockData[0]} /> */}
        </Card>
        <Card
          data={todaysData}
          color={'#9BCDD2'}
          changeScreen={() => changeScreen('VocabScreen', data)}
          listen={() => playSound(data[0].word)}>
          <Text style={styles.cardHeading}>book of words</Text>

          {data.length > 0 && data[0].word && (
            <Text style={styles.word}>{data[0].word}</Text>
          )}
        </Card>
      </View>
    </View>
  );
};
export default HomeScreen;
