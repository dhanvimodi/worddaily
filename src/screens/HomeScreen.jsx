import React, {useEffect, useState, useRef} from 'react';
import {FlatList, Text, View, Dimensions, Button} from 'react-native';
import Background from '../components/Background';
import {getData} from '../utils/helperFunctions';
import analytics from '@react-native-firebase/analytics';
import styles from '../styles/HomeScreen';

import mockData from "../../mockData/mockData.json"
import WordList from '../components/WordList';

const HomeScreen = props => {
  const [name, setName] = useState(props.route.params.name);
  const [data, setData] = useState(mockData);
  const flatListRef = useRef(null);
  // useEffect(() => {

  //   trackScreenView('HomeScreen');
  // }, []);

  // async function trackScreenView(screen) {
  //   // Set & override the MainActivity screen name
  //   if(await analytics().setCurrentScreen(screen, screen)){}
  //   else{
  //       console.log("Error")
  //   }
  // }

  useEffect(() => {
    // fetchData();
    randomizeData();
  }, []);

  // async function fetchData() {
  //   const [todaysData, numberOfDaysVisited] = await getData();
  //   setData(todaysData);
  //   try {
  //     await analytics().logEvent('data_retrieved', {
  //       data: todaysData,
  //       numberOfDaysVisited: numberOfDaysVisited,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  function randomizeData() {
    const randomizedData = [...data].sort(() => Math.random() - 0.5);
    setData(randomizedData);
  };

  const renderItem = ({ item, index }) => {
    return <WordList data={item} />;
  };
  return (
    // <Background>
      <View
        style={styles.container}>
        <View
          style={styles.innerContainer}>
          <FlatList
            ref={flatListRef}
            data={data}
            keyExtractor={(item,index)=>index}
            renderItem={renderItem}
            pagingEnabled={true}
            decelerationRate={'normal'}
            />
        </View>
      </View>
    // </Background>
  );
};
{
  /* <View
        style={{
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: '70%',
            width: '90%',
            backgroundColor: '#e2ce37',
            borderRadius: 40,
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: '#c2af29',
            // IOS specific
            shadowOffset: {width: 0, height: 1},
            shadowOpacity: 0.8,
            shadowRadius: 2,
            // Android specific
            elevation: 15,
          }}>
         
          <View
            style={{
              alignItems:'center',
              
              height: '96%',
              width: '94%',
              backgroundColor: '#f7f8f9',
              borderRadius: 40,
              shadowColor: 'black',
              //IOS specific
              shadowOffset: {width: 0, height: 1},
              shadowOpacity: 0.8,
              shadowRadius: 2,
              // Andorid specific
              elevation: 5,
            }}>

<View
             style={{
             
              height: '15%',
              width: '20%',
              
            marginTop:"-10%",
              backgroundColor: '#e2ce37',
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center',
              shadowColor: '#c2af29',
              // IOS specific
              shadowOffset: {width: 0, height: 1},
              shadowOpacity: 0.8,
              shadowRadius: 2,
              // Android specific
              elevation: 15,
            }}>

            </View>

            </View>
        </View>
      </View> */
}
export default HomeScreen;
