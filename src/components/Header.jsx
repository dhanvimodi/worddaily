import React, {useEffect, useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import styles from '../styles/Header';
import {useRoute} from '@react-navigation/native';
import { fetchFavorites } from '../utils/favorite';
import { fetchUserName } from '../utils/username';
import { scaleFont } from '../utils/responsiveFontSize';


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

    const navigateToFavorites=async()=>{
      const data = await fetchFavorites()
      props.navigation.navigate('FavoriteScreen',{data: data})
    }

 const getUser = async () => {
  const name= await fetchUserName();
  setName(name)
};

    return(
        <View style={styles.container}>
          {route.name=="HomeScreen" ? 
                  <Text style={{color: '#220a6a',
                  letterSpacing: 2,
                  //fontWeight: 'bold',
                  fontSize: scaleFont(30),
                  marginLeft: '5%',
                  //marginBottom:'10%',
                  fontFamily: 'Montserrat-Bold',}}>Hi {name}!</Text>
:
      // <TouchableOpacity onPress={navigateToHome}>
      //   <SimpleLineIcons name="home" size={30} color="#220a6a" />
      // </TouchableOpacity>
      
      
        route.name=="FavoriteScreen" ?

                  <Text style={{color: '#220a6a',
                  letterSpacing: 2,
                  //fontWeight: 'bold',
                  fontSize: scaleFont(28),
                  marginRight: '10%',
                  //marginBottom:'10%',
                  fontFamily: 'Montserrat-Bold',}}>Favorites</Text>
                  :
                  null}
                  {route.name=="HomeScreen" ?
        <TouchableOpacity onPress={navigateToFavorites}>
        {/* <Feather name="user" size={30} color="#000" /> */}
        <Ionicons name="heart-outline" size={40} color="#220a6a" />
      </TouchableOpacity>:null}

        


      {/* <TouchableOpacity >
        <SimpleLineIcons name="settings" size={30} color="#000" />
      </TouchableOpacity> */}
        </View>
    )
}

export default Header;