import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import mockData from '../../mockData/mockData.json';
import WordList from '../components/WordList';
import styles from '../styles/VocabScreen';


const VocabScreen = props => {
  const [data, setData] = useState(props.route.params.data);

  const renderItem = ({item, index}) => {
    return <WordList data={item} />;
  };

  return (
    <View
    style={styles.container}
    >
         <FlatList
      //  ref={flatListRef}
      data={data}
      keyExtractor={(item, index) => index}
      renderItem={renderItem}
      pagingEnabled={true}
      decelerationRate={'normal'}
      initialNumToRender={10}
    />

    </View>
 
  );
};

export default VocabScreen;
