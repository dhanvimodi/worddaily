import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TextInput, TouchableOpacity } from "react-native"
import { scaleFont } from '../utils/responsiveFontSize'
import data from './data'
import { storeUserName } from '../utils/username'
import { storeVocabData } from '../utils/vocab'
import { storeWordOfTheDayData } from '../utils/wordOfTheDay'

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

function CarouselCardItem ({ item, index, name, setName}){

  return (
    <View style={styles.container} key={index}>
{ item.imgUrl &&     <Image
        source={item.imgUrl}
        style={styles.image}
      />}
      <Text style={styles.header}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text>
      { index===data.length-1 &&  
           <TextInput
           style={{
            height: '12%',
            alignSelf: 'center',
            width: '60%',
            marginTop: '15%',
            borderRadius: 10,
           // placeholderTextColor: '#000',
            color: '#000',
            paddingLeft: 10,
            fontFamily: 'Montserrat-Regular',
            fontSize: scaleFont(16),
            borderBottomWidth: 3,
            borderRightWidth: 3,
           // borderWidth: 2,
           // borderColor: '#220a6a',
            borderBottomColor: '#220a6a',
            borderRightColor: '#220a6a',
            //borderColor: '#e5c84c',
            backgroundColor: '#f1f0f8',
            shadowColor: '#220a6a',
            shadowOffset: {width: -2, height: 4},
            shadowOpacity: 0.2,
            shadowRadius: 3,
            elevation: 15,
          }}
           maxLength={15}
           placeholder="Enter your name"
           placeholderTextColor="#000"
           value={name}
           onChangeText={setName}
       />
      }
      {/* {
        index===data.length-1 &&
        <TouchableOpacity style={{
            height: '15%',
            alignSelf: 'center',
            width: '70%',
            marginTop: '20%',
            borderRadius: 10,
        }}
        activeOpacity={.7}
        onPress={changeScreen}
        >

            <View style={{
                height: '100%',
                width: '100%',
                backgroundColor: '#220a6a',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                shadowColor: '#220a6a',
                shadowOffset: {width: -2, height: 4},
                shadowOpacity: 0.2,
                shadowRadius: 3,
                elevation: 15,
            }}>
                <Text style={{
                    color: '#fff',
                    fontFamily: 'Montserrat-SemiBold',
                    fontSize: scaleFont(24),
                }}>Let's Go!</Text>
            </View>
        </TouchableOpacity>
      } */}

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
   // alignItems: 'center',
    borderRadius: 20,
   // width: ITEM_WIDTH,
    height:'100%',
    paddingTop:40,
    paddingBottom: 40,
    shadowColor: '#220a6a',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
    justifyContent:'space-evenly'
  },
  image: {
    alignSelf: 'center',
   // width: '90%',
    height: '50%',
    aspectRatio: 1,
    borderRadius: 20,
  },
  header: {
    color: "#220a6a",
    fontFamily: 'Montserrat-Bold',
    fontSize: scaleFont(32),
   // fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20
  },
  body: {
    color: "#000",
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    marginTop:'5%',
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20
  }
})

export default CarouselCardItem