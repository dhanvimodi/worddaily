import React, {useEffect, useState, useRef} from 'react';
import {FlatList, Text, TouchableOpacity, View, Button, Platform} from 'react-native';

import styles from '../styles/FavoriteScreen';
import { fetchFavorites } from '../utils/favorite';
//import { captureScreen } from '../utils/shareScreenshot';


const FavoriteScreen = (props) => {
  const viewShotRef = useRef(null);

  console.log("FavoriteScreen")
  const [favorites, setFavorites] = useState(props.route.params.data);

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity style={styles.cardContainer} onPress={()=>wordPressed(item)}>
        <Text style={styles.cardTitle}>{item.word}</Text>
        <Text style={styles.cardMeaning}>({item.partOfSpeech}) {item.meaning}</Text>
        {/* <Text style={styles.cardSentence}>{item.sentence}</Text> */}
      </TouchableOpacity>
    )
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

  const onNavigateBack = async() => {
    const fav = await fetchFavorites()
    setFavorites(fav)
  };

  const wordPressed=(item)=>{
    //console.log("word pressed")
    props.navigation.navigate('DailyWordScreen', {data: item});
  }


  return (
    <View
    style={styles.container}
    >
{  
  favorites.length==0 ?
  <View style={styles.favoriteCardContainer}>
            {/* <Ionicons name="heart" size={70} color="#000" /> */}
  <Text style={styles.favoriteCardTitle}>You don't have any favorites yet.</Text>
  <Text style={styles.favoriteCardSubTitle}>Keep tracking of the words you love by adding them to your favorites.</Text>
</View>
:
<FlatList
      persistentScrollbar
      style={styles.flatList}
      contentContainerStyle={styles.flatListContent}
      data={favorites}
      keyExtractor={(item, index) => index}
      renderItem={renderItem}
     // pagingEnabled={true}
      decelerationRate={'normal'}
      initialNumToRender={10}
    />}
    </View>
 
  );
};

export default FavoriteScreen;
