import React, {useEffect, useState} from 'react';
import {Text, View, Dimensions, TouchableOpacity} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Tts from 'react-native-tts';

import styles from '../styles/WordList';
import { useHeaderHeight } from '@react-navigation/elements';

const WordList = ({data}) => {
  const [isSoundPlaying, setIsSoundPlaying] = useState(false);
  const [color, setColor]= useState(getColor())
  const headerHeight = useHeaderHeight();

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



  function getColor () {
    const colour=['#edd4f1','#f0eade','#f8df9b','#d7ebf1','#ffe2cc','#dae3b1']
   index= Math.floor(Math.random() * (6 - 0) + 0);
   // setData(randomizedData);
    return colour[index];
  }
  
  
  return (
    <View
      style={[
        styles.wordContainer,
        {
          height: Dimensions.get('window').height-headerHeight,
        },
      ]}>
        <View
         style={[{
         // backgroundColor:'pink',
          width:'98%',
          height:'90%',
          justifyContent:'center',        
        alignItems:'center',
        textAlign:'center',
        padding:'3%',
        borderStyle:'solid',
        borderTopLeftRadius:25,
        borderBottomLeftRadius:25,
        borderTopRightRadius:25,
        borderBottomRightRadius:25,
       // borderRadius:
         },
        {
          backgroundColor:color
        }]}
        >
      <Text style={styles.word}>{data.word}</Text>

      <Text style={styles.phonetic}>{data.phonetic}</Text>
      <Text style={styles.partOfSpeech}>({data.partOfSpeech})</Text>
      <Text style={styles.meaning}>{data.meaning}</Text>

      <Text style={styles.sentence}>"{data.sentence}"</Text>

      <TouchableOpacity onPress={playSound} style={styles.soundButton}>
        <SimpleLineIcons name="volume-2" size={45} color="#000" />
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default React.memo(WordList);
