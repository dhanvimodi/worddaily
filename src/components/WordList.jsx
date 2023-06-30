import React, {useEffect, useState} from 'react';
import {Text, View, Dimensions, TouchableOpacity} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Tts from 'react-native-tts';

import styles from '../styles/WordList';
import { useHeaderHeight } from '@react-navigation/elements';

const WordList = ({data}) => {
  const [isSoundPlaying, setIsSoundPlaying] = useState(false);

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
  return (
    <View
      style={[
        styles.wordContainer,
        {
          height: Dimensions.get('window').height-headerHeight,
        },
      ]}>
      <Text style={styles.word}>{data.word}</Text>

      <Text style={styles.phonetic}>{data.phonetic}</Text>
      <Text style={styles.partOfSpeech}>({data.partOfSpeech})</Text>
      <Text style={styles.meaning}>{data.meaning}</Text>

      <Text style={styles.sentence}>"{data.sentence}"</Text>

      <TouchableOpacity onPress={playSound} style={styles.soundButton}>
        <SimpleLineIcons name="volume-2" size={45} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(WordList);
