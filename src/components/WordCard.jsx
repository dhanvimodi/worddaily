import React, {useEffect, useState, useRef} from 'react';
import {Text, View, Dimensions, TouchableOpacity} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Tts from 'react-native-tts';
import ViewShot from 'react-native-view-shot';

import styles from '../styles/WordCard';
import {useHeaderHeight} from '@react-navigation/elements';
import {addFavorite, removeFavorite} from '../utils/favorite';
import {updateVocabFavorite} from '../utils/vocab';
import {updateWordOfTheDayFavorite} from '../utils/wordOfTheDay';
import {useRoute} from '@react-navigation/native';
import {captureAndShareScreenshot} from '../utils/shareScreenshot';

const WordCard = ({data}) => {
  const [isSoundPlaying, setIsSoundPlaying] = useState(false);
  // const [color, setColor] = useState(getColor());
  const [isFavorite, setIsFavorite] = useState(data.favorite);
  const [isShared, setIsShared] = useState(false);

  // const headerHeight = useHeaderHeight();
  // const route = useRoute();
  const viewref = useRef();

  useEffect(() => {
    Tts.addEventListener('tts-start', event => {
      setIsSoundPlaying(true);
    });
    Tts.addEventListener('tts-finish', event => {
      setIsSoundPlaying(false);
    });
  }, []);

  const playSound = () => {
    if (!isSoundPlaying) {
      Tts.speak(data.word);
    }
  };



  function updateFavorite() {
    //console.log("update favorite")

    if (isFavorite) {
      //console.log("remove favorite")
      removeFavorite(data);
    } else {
      //console.log("add favorite")
      addFavorite(data);
    }
    updateVocabFavorite(data);
    updateWordOfTheDayFavorite(data);
    setIsFavorite(initialValue => !initialValue);
  }

  const shareContent=()=>{
  //  console.log("share content")
    setIsShared(true)
    captureAndShareScreenshot(viewref)
  }

  useEffect(() => {
    if(isShared){
      setTimeout(()=>{
        setIsShared(false)
      },1500)
    }
  },[isShared])

  return (
    <ViewShot ref={viewref}>
      <View
        style={[
          styles.wordContainer,
          {
            height: Dimensions.get('window').height * 0.80,
          },
        ]}>
        <View
          style={styles.wordInnerContainer}>
          <Text style={styles.word}>{data.word}</Text>

          <Text style={styles.phonetic}>{data.phonetic}</Text>
          <Text style={styles.partOfSpeech}>({data.partOfSpeech})</Text>
          <Text style={styles.meaning}>{data.meaning}</Text>

          <Text style={styles.sentence}>"{data.sentence}"</Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={playSound} style={styles.button}>
              <SimpleLineIcons name="volume-2" size={45} color="#000" />
            </TouchableOpacity>

            <TouchableOpacity onPress={updateFavorite} style={styles.button}>
              <Ionicons
                name={isFavorite ? 'heart' : 'heart-outline'}
                size={50}
                color={isFavorite ? "#d1d0f0" : '#000'}
              />
              
            </TouchableOpacity>

            <TouchableOpacity 
              activeOpacity={.7} // default is .2
            onPress={shareContent} style={styles.button}>
              <Ionicons name="share-outline" size={45} color="#000" />
            </TouchableOpacity>
          </View>
         {
         isShared &&
         <Text style={styles.appName}>A WORD GURU</Text>}
        </View>
      </View>
    </ViewShot>
  );
};

export default React.memo(WordCard);
