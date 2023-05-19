import React  from 'react';
import { View,Image, ImageBackground} from 'react-native';
import { ImagesAssets } from '../../assets/images/ImagesAssets';

const Background = (props) => {


  return(
    <View 
    style={{
        backgroundColor:"#fff",
        height:"100%",
        width:"100%"
    }}
    >
        <ImageBackground
        source={ImagesAssets.backDrop1}
        style={{
            height:"100%",
            width:"100%",
        justifyContent:"center",
        alignItems:"center"
         }}
        // imageStyle={{opacity: 0.3}}
        resizeMode="cover"
        >
            <View style={{
                height:"100%",
                width:"100%",
                alignItems:"center"
            }}>
            {props.children}
            </View>
            
        </ImageBackground>
    </View>
   
  )
}

export default Background;
