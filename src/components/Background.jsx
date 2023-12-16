import React  from 'react';
import { View,Image, ImageBackground} from 'react-native';
const Background = (props) => {


  return(
    <View 
    style={{
      // backgroundColor:"#FFDAB9",
       backgroundColor:"#DAD8CD",
        height:"100%",
        width:"100%"
    }}
    >
        {/* <ImageBackground
        source={require("../../images/BackDrop1.png")}
        style={{
            height:"100%",
            width:"100%",
        justifyContent:"center",
        alignItems:"center"
         }}
        // imageStyle={{opacity: 0.3}}
        resizeMode="cover"
        > */}
            <View style={{
                height:"100%",
                width:"100%",
                alignItems:"center"
            }}>
            {props.children}
            </View>
            
        {/* </ImageBackground> */}
    </View>
   
  )
}

export default Background;
