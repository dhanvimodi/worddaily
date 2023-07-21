import React, {useEffect, useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import styles from '../styles/Header';
import {useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFavorites } from '../utils/favorite';



const Header = (props) => {

  const [name, setName] = useState('');


    const route = useRoute();

    useEffect(()=>{
      getUser()
    },[])

    const navigateToHome=()=>{
      //  console.log(props.navigation)
        props.navigation.navigate('HomeScreen')
    }

    const navigateToProfile=async()=>{
      const data = await getFavorites()
      props.navigation.navigate('FavoriteScreen',{data: data})
    }

 console.log("route in header", route.name)
 const getUser = async () => {
   console.log('In get user');
  try {
    await AsyncStorage.getItem('username').then(name => {
        setName(name);
    });
  } catch (error) {
    console.log(error);
  }
};
    return(
        <View style={styles.container}>
          {route.name=="HomeScreen" ? 
                  <Text style={{color: '#030303',
                  letterSpacing: 2,
                  //fontWeight: 'bold',
                  fontSize: 24,
                  marginLeft: '5%',
                  //marginBottom:'10%',
                  fontFamily: 'Montserrat-SemiBold',}}>Hi {name}!</Text>
:
      <TouchableOpacity onPress={navigateToHome}>
        <SimpleLineIcons name="home" size={30} color="#000" />
      </TouchableOpacity>
      }
      <TouchableOpacity onPress={navigateToProfile}>
        {/* <Feather name="user" size={30} color="#000" /> */}
        <Ionicons name="heart-outline" size={40} color="#000" />
      </TouchableOpacity>

        


      {/* <TouchableOpacity >
        <SimpleLineIcons name="settings" size={30} color="#000" />
      </TouchableOpacity> */}
        </View>
    )
}

export default Header;