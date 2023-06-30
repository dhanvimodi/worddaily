import React, {useEffect, useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import styles from '../styles/Header';
import {useRoute} from '@react-navigation/native';



const Header = (props) => {

    const route = useRoute();

    const navigateToHome=()=>{
      //  console.log(props.navigation)
        props.navigation.navigate('HomeScreen')
    }
    return(
        <View style={styles.container}>
          <TouchableOpacity onPress={navigateToHome}>
        <SimpleLineIcons name="home" size={30} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity >
        <SimpleLineIcons name="settings" size={30} color="#000" />
      </TouchableOpacity>
        </View>
    )
}

export default Header;