import React, {useState} from 'react'
import { View , TouchableOpacity, Text, Dimensions } from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem'
import data from '../../mockData/carouselData'
import { scaleFont } from '../utils/responsiveFontSize'
import { storeUserName } from '../utils/username'

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
    <View style={{
      height:'100%',
         //backgroundColor:'orange',
         display:'flex',
         flexDirection:'column',

         alignItems: 'center',
         justifyContent: 'center',
    }}>
      <Carousel
        layout="default"
       // layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        contentContainerCustomStyle={{
            // alignItems: 'center',
            //ssss backgroundColor:'pink',
            marginTop:'15%',
             height:Dimensions.get('window').height*0.7,
            }}
       // useScrollView={true}
      />
      {/* <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.92)'
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      /> */}

{
        index===data.length-1 
        ?
        <TouchableOpacity 
        style={{
          backgroundColor: '#fff',
            height: '10%',
            alignSelf: 'center',
            width: '90%',
            marginBottom: '15%',
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
                padding:'5%',
                paddingHorizontal:'10%'
            }}>
                <Text style={{
                    color: '#fff',
                    fontFamily: 'Montserrat-SemiBold',
                    fontSize: scaleFont(24),
                }}>Let's Get Started</Text>
            </View>
         </TouchableOpacity>
         :
         <TouchableOpacity 
         style={{
          // backgroundColor: '#fff',
             height: '6%',
             alignSelf: 'flex-end',
            // width: '70%',
            marginRight:'20%',
           // alignSelf:'flex-end',
           //position:'absolute',
           //right:0,
             marginBottom: '8%',
             borderRadius: 10,
         }}
         activeOpacity={.7}
         onPress={nextPage}
         >
 
             <View style={{
                 height: '100%',
                 width: '100%',
                 backgroundColor: '#f1f0f8',
                 borderRadius: 10,
                 justifyContent: 'center',
                 alignItems: 'center',
                 shadowColor: '#220a6a',
                 shadowOffset: {width: -2, height: 4},
                 shadowOpacity: 0.2,
                 shadowRadius: 3,
                 elevation: 15,
                 //padding:'5%',
                 paddingHorizontal:'7%'
             }}>
                 <Text style={{
                     color: '#000',
                     fontFamily: 'Montserrat-SemiBold',
                     fontSize: scaleFont(24),
                    // backgroundColor:'#f1f0f8',
                     //padding:'5%',
                 }}>Next</Text>
             </View>
          </TouchableOpacity>
      }
    </View>
  )
}

export default CarouselCards
