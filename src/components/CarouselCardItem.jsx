import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TextInput, Keyboard } from "react-native"
import { scaleFont } from '../utils/responsiveFontSize'
import data from '../../mockData/carouselData'
import { storeUserName } from '../utils/username'
import { storeVocabData } from '../utils/vocab'
import { storeWordOfTheDayData } from '../utils/wordOfTheDay'

export const SLIDER_WIDTH = Dimensions.get('window').width
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH)

function CarouselCardItem ({ item, index, name, setName}){

  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false)

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setIsKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsKeyboardVisible(false); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <View style={styles.container} key={index}>
{ item.imgUrl &&     <Image
        source={item.imgUrl}
        style={[styles.image,
              index===1 && styles.secondImage
        ]}
      />}
      
      <Text style={[styles.header,
          !item.imgUrl && {
            marginTop: '5%',
          }
      ]}>{item.title}</Text>
   
        <Text style={[styles.body,
          !item.imgUrl && {
            marginTop: '20%',
          }
        ]}>{item.body}</Text>
      { index===data.length-1 &&  
           <TextInput
           style={[{
            height: '12%',
            alignSelf: 'center',
            width: '60%',
            marginTop: '25%',
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
          },
          isKeyboardVisible && {
            marginBottom:"20%"

          }]}
           maxLength={15}
           placeholder="Enter your name"
           placeholderTextColor="#000"
           value={name}
          // onPressIn={changeKeyBoardShown}
          // onPressOut={changeKeyBoardShown}
           onChangeText={setName}
       />
      }

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
   // backgroundColor: 'white',
   // alignItems: 'center',
    borderRadius: 20,
   // width: ITEM_WIDTH,
    height:'100%',
    paddingTop:20,
    paddingBottom: 40,
    width:'100%',
    // shadowColor: '#220a6a',
    // shadowOffset: {width: -2, height: 4},
    // shadowOpacity: 0.2,
    // shadowRadius: 3,
    // elevation: 10,
   // justifyContent:'space-around'
  },
  image: {
    alignSelf: 'center',
    //width: '90%',
    height: '52%',
    aspectRatio: 1,
    marginBottom:'15%',
    borderRadius: 20,
  },
  secondImage:{
    alignSelf: 'center',
    //width: '90%',
    height: '52%',
    aspectRatio: 4/3,
    marginBottom:'15%',
    borderRadius: 20,
  },
  header: {
    color: "#220a6a",
    fontFamily: 'Montserrat-Bold',
    fontSize: scaleFont(32),
   // fontWeight: "bold",
   marginLeft:'7%',
   marginRight:'7%',

  //  paddingLeft: 20,
 //   paddingTop: 
  },
  body: {
    color: "#000",
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    // paddingLeft: 20,
    // paddingLeft: 20,
    // paddingRight: 20,
    marginRight:'7%',
    marginLeft:'7%',
    marginTop:'5%'
  }
})

export default CarouselCardItem