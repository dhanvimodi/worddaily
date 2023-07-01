import React, {useEffect} from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import styles from '../styles/Card';

const Card = props => {
  //   console.log(props)
  return (
    <View style={[styles.container,{
      backgroundColor:props.color,
      borderColor:'#000',
      borderWidth:2
    }]}>
      {props.children}
      <View style={styles.buttonRowContainer}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => props.listen()}>
          <Text style={styles.buttonText}>Listen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => props.changeScreen()}>
          <Text style={styles.buttonText}>View More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;
