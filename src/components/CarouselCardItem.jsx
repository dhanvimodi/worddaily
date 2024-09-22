import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TextInput, Keyboard } from "react-native"
import { scaleFont } from '../utils/responsiveFontSize'
import data from '../../mockData/carouselData'
import styles from '../styles/CarouselCardItem';

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
          !item.imgUrl && styles.headerTitle
      ]}>{item.title}</Text>
   
        <Text style={[styles.body,
          !item.imgUrl && styles.headerBody
        ]}>{item.body}</Text>
      { index===data.length-1 &&  
           <TextInput
           style={[styles.nameInput,
          isKeyboardVisible && styles.nameInputKeyboard]}
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

export default CarouselCardItem