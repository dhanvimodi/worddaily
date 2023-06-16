import React, {useEffect} from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
const Card = props => {
 //   console.log(props)
    return(
        <View
        style={{
            height:'25%',
            marginTop:'15%',
            backgroundColor:'#030303',
            borderRadius:25,
            padding:'5%',
            marginLeft:'5%',
           // alignItems:'center'
           // width:'100%'
        }}>
            {props.children}
            <View
            style={{
                flex:1,
                flexDirection:'row',
                justifyContent:'space-evenly',
              //  height:'0%'
            }}>

            <TouchableOpacity
            style={{
                backgroundColor:'#fff',
                width:'45%',
                marginTop:'10%',
                height:'50%',
                borderRadius:10,
                alignSelf:'center',
                justifyContent:'center'
            }}
            onPress={()=>props.listen()}
            
            >
                <Text
                          style={{
                            color: '#000',
                            letterSpacing: 2,
                           // fontWeight: 'bold',
                           textAlign:'center',
                          // textAlignVertical:'center',
                            fontSize: 14,
                            marginTop: '2%',
                            fontFamily: 'Montserrat-SemiBold',
                          }}>Listen</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={{
                backgroundColor:'#fff',
                width:'45%',
                marginTop:'10%',
                height:'50%',
                borderRadius:10,
                alignSelf:'center',
                justifyContent:'center'
            }}
            onPress={()=>props.changeScreen()} 
            >
                <Text
                          style={{
                            color: '#000',
                            letterSpacing: 2,
                           // fontWeight: 'bold',
                           textAlign:'center',
                          // textAlignVertical:'center',
                            fontSize: 14,
                            marginTop: '2%',
                            fontFamily: 'Montserrat-SemiBold',
                          }}>View More</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default Card;