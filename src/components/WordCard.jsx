import React, {useEffect, useState} from 'react';
import {Text, View, Dimensions, TouchableOpacity} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Tts from 'react-native-tts';

import styles from '../styles/WordCard';
import { useHeaderHeight } from '@react-navigation/elements';
import { addFavorite, getFavorites, removeFavorite } from '../utils/favorite';
import { updateVocabData, updateWordOfTheDayData } from '../utils/updateData';
import {useRoute} from '@react-navigation/native';


const WordCard = ({data}) => {
  const [isSoundPlaying, setIsSoundPlaying] = useState(false);
  const [color, setColor]= useState(getColor())
 // const [data, setData]= useState(props.data)
  const [isFavorite, setIsFavorite]= useState(data.favorite)

  const headerHeight = useHeaderHeight();

  const route = useRoute();

 // var data=props.data
  //console.log("data in wordcard", data)

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
  
  function updateFavorite () {
    //console.log("update favorite")

   if(data.favorite){
    //console.log("remove favorite")
    removeFavorite(data)
   }
   else{
    //console.log("add favorite")
    addFavorite(data)
   }
   
   if(route.name=="DailyWordScreen"){
    updateWordOfTheDayData(data)
    
   }
   else if(route.name=="FavoriteScreen"){
    updateVocabData(data)
    updateWordOfTheDayData(data)
   }
   else{
    updateVocabData(data)
     }
     //updateFavoriteData()
       //setData({...data, favorite:!data.favorite})
   //console.log(data.favorite)
   setIsFavorite(initialValue=>!initialValue)
  // updateVocabData()
  // addFavorite(data)

  }
  
  return (
    <View
      style={[
        styles.wordContainer,
        {
          height: Dimensions.get('window').height*0.85,
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

      <View style={styles.buttonContainer}>

      <TouchableOpacity onPress={playSound} style={styles.button}>
        <SimpleLineIcons name="volume-2" size={45} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity onPress={updateFavorite} style={styles.button}>
        <Ionicons name={isFavorite ? "heart" : "heart-outline"} size={50} color="#000" />
      </TouchableOpacity>


      </View>
      </View>
    </View>
  );
};

export default React.memo(WordCard);