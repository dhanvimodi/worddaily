import React ,{createRef,useEffect,useState} from 'react';
import { FlatList, Text, View,Dimensions,Image, ImageBackground} from 'react-native';
import Background from '../components/Background';
const SplashScreen = (props) => {

    useEffect(()=>{
        setTimeout(()=>{
            props.navigation.replace("OnboardingScreen")
        },2500)
    },[])

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
                height:"35%",
                aspectRatio:4/3
        
            }}
            source={require("../../images/Logo.png")}
            />
            </View>  
       </Background>
   
  )
}

export default SplashScreen;
