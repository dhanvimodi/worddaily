import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
//import mockData from '../../mockData/mockData.json';
import WordCard from '../components/WordCard';
import styles from '../styles/VocabScreen';


const VocabScreen = (props) => {
 // console.log(props)
  const [vocab, setVocab] = useState(props.route.params.data);

  const renderItem = ({item, index}) => {
    return <WordCard data={item} />;
  };

  return (
    <View
    style={styles.container}
    >
    <FlatList
      persistentScrollbar
      //  ref={flatListRef}
      data={vocab}
      keyExtractor={(item, index) => index}
      renderItem={renderItem}
      pagingEnabled={true}
      decelerationRate={'normal'}
      initialNumToRender={10}
      //showsVerticalScrollIndicator={true}
    />

    </View>
 
  );
};

export default VocabScreen;
