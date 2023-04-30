import React ,{createRef,useEffect,useState} from 'react';
import { FlatList, Text, View,Dimensions,Image, ImageBackground} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Background from '../components/Background';
const SplashScreen = (props) => {

    useEffect(()=>{
        console.log("In use effect")
        getUser()
    },[])

    function changeScreen(name){
        console.log("In changescreen")
        console.log(name)
        if(name){
            console.log("Going to home screen")
            props.navigation.replace("HomeScreen",{
                name
            })
        }
        else{
            console.log("First time user")
            props.navigation.replace("OnboardingScreen")
        }        
    }

    const getUser = async () => {
        console.log("In get user")
        try {
          await AsyncStorage.getItem("username")
          .then(name=>{
            setTimeout(()=>{
                changeScreen(name)
            },2000)
        })
        } catch (error) {
          console.log(error);
        }
      };
  return(

    <Background>
         <View
         style={{
            height:"100%",
            width:"100%",
            justifyContent:"center",
            alignItems:"center"
         }}
         > 
            <Image
            style={{
                height:"28%",
                aspectRatio:4/3
        
            }}
            source={require("../../images/logo.png")}
            />
            </View>  
       </Background>
   
  )
}

export default SplashScreen;
