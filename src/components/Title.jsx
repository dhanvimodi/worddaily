import React from "react"
import {View, Text, TouchableOpacity} from "react-native"

const Title=(props)=>{

    
    return(
      <View
      style={{
        height:"100%",
        width:"100%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"flex-start",
        marginLeft:50
      }}
      >
        <Text
        style={{
          color:"#ff5722",
          fontSize:42,
          fontWeight:"bold"
        }}
        >WORD</Text>
        <Text
        
        style={{
          marginTop:10,
          width:"100%",
          color:"white",
          fontSize:30,
          fontStyle:"italic"
        }}>of</Text>
        <Text
         style={{
          width:"100%",
          color:"white",
          fontSize:30,
          fontStyle:"italic"
        }}
        >the</Text>
        <Text
        style={{
          marginTop:10,
          color:"white",
          fontSize:42,
          fontWeight:"bold"
        }}>DAY</Text>

        <Text
        style={{
          marginTop:80,
          width:"70%",
          color:"white",
          textAlign:"center",
          fontSize:16,
        }}
        >Get a new word daily and learn its meaning and usage</Text>

        <TouchableOpacity

        //color="white"
        style={{
          backgroundColor:"white"
        }}
        >
<Text>Get Started</Text>
          </TouchableOpacity>
      </View>
    )
}
export default Title