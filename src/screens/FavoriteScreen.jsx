import React, {useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
//import mockData from '../../mockData/mockData.json';
import WordCard from '../components/WordCard';
import styles from '../styles/FavoriteScreen';


const FavoriteScreen = (props) => {
 // console.log(props)
  const [vocab, setVocab] = useState(props.route.params.data);

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity style={styles.cardContainer} onPress={()=>wordPressed(item)}>
        <Text style={styles.cardTitle}>{item.word}</Text>
      </TouchableOpacity>
    )
  };

  const wordPressed=(item)=>{
    console.log("word pressed")
    props.navigation.navigate('DailyWordScreen', {data: item});
  }

  return (
    <View
    style={styles.container}
    >
    <FlatList
      persistentScrollbar
      style={styles.flatList}
      contentContainerStyle={styles.flatListContent}
      data={vocab}
      keyExtractor={(item, index) => index}
      renderItem={renderItem}
      pagingEnabled={true}
      decelerationRate={'normal'}
      initialNumToRender={10}
    />

    </View>
 
  );
};

export default FavoriteScreen;
