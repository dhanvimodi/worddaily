import React, {useEffect, useState, useRef} from 'react';
import {Text, View, Dimensions} from 'react-native';
import * as Notifications from 'expo-notifications'
import {fetchWordOfTheDayData} from '../utils/wordOfTheDay';
import Tts from 'react-native-tts';
import styles from '../styles/HomeScreen';
import Card from '../components/Card';
import {fetchVocabData} from '../utils/vocab';



const HomeScreen = props => {
  console.log('HomeScreen')
  // const [name, setName] = useState('');
  const [data, setData] = useState([]);
  const [todaysData, setTodaysData] = useState([]);
  const [isSoundPlaying, setIsSoundPlaying] = useState(false);


  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    Tts.addEventListener('tts-start', event => {
      setIsSoundPlaying(true);
    });
    Tts.addEventListener('tts-finish', event => {
      setIsSoundPlaying(false);
    });
  }, []);

  useEffect(() => {
   // createChannel();
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

  useEffect(() => {

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
     // setNotification(notification);
    });

   
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
     // props.navigation.navigate()
     console.log('Notification clicked');
     props.navigation.navigate('DailyWordScreen', {data: response.notification.request.content.data});
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
       Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);



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
    const randomizedData = [...data].sort(() => Math.random() - 0.5);
    setData(randomizedData);
    // console.log("In randomize data")
    // console.log(data)
    //setData(data);
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
      <View style={styles.innerContainer}>
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
    </View>
  );
};
export default HomeScreen;
