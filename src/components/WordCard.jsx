import React from 'react';
import {Text, View} from 'react-native';
import Title from './Title';
import GestureRecognizer from 'react-native-swipe-gestures';
import {SwipeContainer} from "../hooks/SwipeContainer"
const WordCard = (props) => {

  const config = {
    velocityThreshold: 0.2,
    directionalOffsetThreshold: 80
  };

  const left = () => console.log("left");
const right = () => console.log("right");


  return (
    <View
      style={{
        backgroundColor: '#ffffff',
        flex:1,
        borderRadius: 10,
        padding: 10,
      }}>
        {/* <SwipeContainer onSwipeLeft={left} onSwipeRight={right}> */}
        {/* <GestureRecognizer
        config={config}
        onSwipe={(direction,state)=>props.loadData(direction,props.index,props.data.date)}
        > */}
      {/* header */}
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <Text style={{color: '#d5d5d5'}}>{props.data.date}</Text>
        <View
          style={{
            width: '45%',
          }}>
          <Title
            titleSize={16}
            subtitleSize={12}
            color={'#d5d5d5'}
            subtitleWidth={'15%'}
          />
        </View>
      </View>

      {/* word description */}
      <View
        style={{
          height: '85%',
          marginTop: '5%',
          padding:20,
          //backgroundColor: 'pink',
        }}>
        <Text
          style={{
            fontSize: 30,
            color: '#2e3233',
          }}>
          {props.data.word}
        </Text>

        <Text
          style={{
            fontSize: 18,
            marginTop:20,
            fontStyle:'italic',
            color: '#353535',
          }}>
          {props.data.type}
        </Text>

        <Text
          style={{
            fontSize: 20,
            marginTop:40,
            color: '#2a2a2a',
          }}>
          {props.data.meaning}
        </Text>

        <Text
          style={{
            fontSize: 18,
            marginTop:30,
            fontStyle:'italic',
            color: '#454545',
          }}>
          {props.data.sentence}
        </Text>

        <Text
          style={{
            fontSize: 14,
            marginTop:25,
            color: '#03b3c0',
          }}>
          Look up with Google
        </Text>
      </View>
      {/* </SwipeContainer> */}
      {/* </GestureRecognizer> */}
    </View>
  );
};

export default WordCard;
