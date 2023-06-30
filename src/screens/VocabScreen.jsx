import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import mockData from '../../mockData/mockData.json';
import WordList from '../components/WordList';

const VocabScreen = props => {
  const [data, setData] = useState(props.route.params.data);

  const renderItem = ({item, index}) => {
    return <WordList data={item} />;
  };

  return (
    <FlatList
      //  ref={flatListRef}
      data={data}
      keyExtractor={(item, index) => index}
      renderItem={renderItem}
      pagingEnabled={true}
      decelerationRate={'normal'}
      initialNumToRender={10}
    />
  );
};

export default VocabScreen;
