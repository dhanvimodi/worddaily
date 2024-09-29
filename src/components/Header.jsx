import React, {useEffect, useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../styles/Header';
import {useRoute} from '@react-navigation/native';
import { fetchFavorites } from '../utils/favorite';
import { fetchUserName } from '../utils/username';


const Header = (props) => {

  const [name, setName] = useState('');


    const route = useRoute();

    useEffect(()=>{
      getUser()

    },[])


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
                  // <Text style={styles.greeting}>Hi {name}!</Text>
                  <Ionicons name="home" size={34} color="#220a6a" />

:
      // <TouchableOpacity onPress={navigateToHome}>
      //   <SimpleLineIcons name="home" size={30} color="#220a6a" />
      // </TouchableOpacity>
      
      
        route.name=="FavoriteScreen" ?

                  <Text style={styles.favoriteHeading}>Favorites</Text>
                  :
                  null}
                  {route.name=="HomeScreen" ?
        <TouchableOpacity onPress={navigateToFavorites}>
        {/* <Feather name="user" size={30} color="#000" /> */}
        <Ionicons name="heart" size={34} color="#220a6a" />
      </TouchableOpacity>:null}

        


      {/* <TouchableOpacity >
        <SimpleLineIcons name="settings" size={30} color="#000" />
      </TouchableOpacity> */}
        </View>
    )
}

export default Header;