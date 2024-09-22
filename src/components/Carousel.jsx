import React, {useState} from 'react'
import { View , TouchableOpacity, Text } from "react-native"
import Carousel from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem'
import data from '../../mockData/carouselData'
import { storeUserName } from '../utils/username'
import styles from '../styles/Carousel'

const CarouselCards = ({navigation}) => {
  const [index, setIndex] = React.useState(0)
  const [name, setName] = useState('');

  const isCarousel = React.useRef(null)

function changeScreen(){
  if (name) {
    storeName(name);
    navigation.replace('HomeScreen', {
      name,
    });
  } else {
    alert('Please enter a name');
  }
}

async function storeName(name) {
  await storeUserName(name)
}
  const renderItem=({item, index})=>{
   // console.log('item', item)
    return <CarouselCardItem item={item} index={index} name={name} setName={setName}/>
  }
  const nextPage=()=>{
    isCarousel.current.snapToNext()
  }
  return (
    <View style={styles.carouselContainer}>
      <Carousel
        layout="default"
       // layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        contentContainerCustomStyle={styles.carouselContentContainer}
      />
{
        index===data.length-1 
        ?
        <TouchableOpacity 
        style={styles.buttonContainer}
        activeOpacity={.7}
        onPress={changeScreen}
        >
          <View style={styles.buttonInnerContainer}>
            <Text style={styles.buttonText}>Let's Get Started</Text>
            </View>
         </TouchableOpacity>
         :
         <TouchableOpacity 
         style={styles.nextPageButton}
         activeOpacity={.7}
         onPress={nextPage}
         >
          <View style={styles.nextPageButtonContainer}>
                 <Text style={styles.nextText}>Next</Text>
             </View>
          </TouchableOpacity>
      }
    </View>
  )
}

export default CarouselCards
