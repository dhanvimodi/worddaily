import React, {useEffect, useState, useCallback} from 'react';
import {Text, View} from 'react-native';
import {getData} from '../utils/wordOfTheDay';
import analytics from '@react-native-firebase/analytics';
import Tts from 'react-native-tts';


import styles from '../styles/HomeScreen';
//import vocabData from '../../mockData/vocab.json';
import WordCard from '../components/WordCard';
import Card from '../components/Card';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = (props) => {
  const [name, setName] = useState('');
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

  useEffect(()=>{
    getUser()
  },[])

  const getUser = async () => {
    // console.log('In get user');
    try {
      await AsyncStorage.getItem('username').then(name => {
          setName(name);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const playSound = (word) => {
    if (!isSoundPlaying) {
      Tts.speak(word);
    }
  };
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
    fetchWordOfTheDayData();
    fetchVocabData();
   // randomizeData();
  }, []);



  async function fetchWordOfTheDayData() {
   // console.log('In fetch word of the day data')
    const [todaysData, numberOfDaysVisited] = await getData();
    setTodaysData(todaysData);
    // try {
    //   await analytics().logEvent('data_retrieved', {
    //     data: todaysData,
    //     numberOfDaysVisited: numberOfDaysVisited,
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
  }

  const updateTodaysFavorite = () => {
    //console.log("update favorite in word of tehe day")
    // console.log("data before updation",data)
     setTodaysData({...todaysData, favorite: !todaysData.favorite})
  }

  const onNavigateBack = () => {

    fetchVocabData()
    fetchWordOfTheDayData()
  };

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      onNavigateBack();
    });

    // Cleanup function to unsubscribe when the component is unmounted
    return () => {
      unsubscribe();
    };
  }, [props.navigation]);



  async function fetchVocabData() {
    //console.log("In fetch vocab data")
    try {
      const value = await AsyncStorage.getItem('vocab');
      if (value !== null) {
     //   console.log('Vocab data retrieved');
        randomizeData(JSON.parse(value))
        //setData(JSON.parse(value));
      }
    } catch (error) {
      console.log(error);
    }
  }

 // console.log(data)

  function randomizeData(data) {
   // const randomizedData = [...data].sort(() => Math.random() - 0.5);
   // setData(randomizedData);
  // console.log("In randomize data")
  // console.log(data)
   setData(data)
  }

  const changeScreen = (screenName, data) => {
    props.navigation.navigate(screenName, {data: data});
  };


  return (
    // <Background>
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
          listen={() => playSound(todaysData.word)}
         // updateTodaysFavorite={updateTodaysFavorite}
          >
          <Text style={styles.cardHeading}>word of the day</Text>
          <Text style={styles.word}
            numberOfLines={2}
          >{todaysData.word}</Text> 
          {/* <WordList data={mockData[0]} /> */}
        </Card>
        <Card
          data={todaysData}
          color={'#9BCDD2'}
          changeScreen={() => changeScreen('VocabScreen', data)}
          listen={() => playSound(data[0].word)}>
          <Text style={styles.cardHeading}>book of words</Text>

          {
            data.length>0 && data[0].word && <Text style={styles.word}>{data[0].word}</Text>
            
          }
          
          {/* <WordList data={mockData[0]} /> */}
        </Card>
      </View>
    </View>
    // </Background>
  );
};
export default HomeScreen;
