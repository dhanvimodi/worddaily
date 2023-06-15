import React, {useEffect, useState} from 'react';
import {Text, View, Dimensions, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Tts from 'react-native-tts';

import styles from '../styles/HomeScreen';
const WordList = ({data}) => {

   const playSound=()=>{
    Tts.speak(data.word)
   }
    return(
        <View
            style={[styles.wordContainer,
                {
             height:Dimensions.get('window').height
            }
             ]}>
            <Text
              style={styles.word}>
              {data.word}
            </Text>

            <Text
              style={styles.phonetic}>
              {data.phonetic}
            </Text>
            <Text
              style={styles.partOfSpeech}>
              ({data.partOfSpeech})
            </Text>
            <Text
              style={styles.meaning}>
              {data.meaning}
            </Text>

            <Text
              style={styles.sentence}>
              "{data.sentence}"
            </Text>

             <TouchableOpacity
             onPress={playSound}
             style={{
              marginTop:'23%',
              opacity:0.6
             }}
             >
              <SimpleLineIcons name="volume-2" size={45} color="#000" />
            </TouchableOpacity>
          </View>
    )
}

export default WordList;