import React from 'react';
import { View , Text, TouchableOpacity, Modal, TextInput, Button, Alert} from 'react-native';
import { getFavorites } from '../utils/favorite';

const ProfileScreen = (props) => {   

    const showFavorites=async()=>{
        const data = await getFavorites()
      //  console.log(data)
        props.navigation.navigate('FavoriteScreen', {data: data});
    }

    const showAlert=()=>{
        console.log("show alert")
        return(
            Alert.alert("Enter your name:")
            // <Modal visible={true} animationType="fade" transparent>
            // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
            //   <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 8 }}>
            //     <Text>Enter your name:</Text>
            //     <TextInput
            //       value={name}
            //       onChangeText={(text) => console.log(text)}
            //       placeholder="Your name"
            //       style={{ borderBottomWidth: 1, marginBottom: 10 }}
            //     />
            //     {/* <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
            //       <Button title="Cancel" onPress={onClose} />
            //       <Button title="OK" onPress={handleConfirm} />
            //     </View> */}
            //   </View>
            // </View>
        //   </Modal>
        )
    }
    return (
        <View
        style={{
            justifyContent:'center',
            alignItems:'center'
        }}
        >
            <TouchableOpacity
            style={{
                backgroundColor:'#9BCDD2',
                marginTop:'5%',
                height:'28%',
                width:'90%',
                borderColor:'#000',
                borderRadius:5,
                borderWidth:2,
                justifyContent:'center',
                alignItems:'center'
            }}
            onPress={showFavorites}
            >
                <Text style={{
                    fontSize:28,
                    fontFamily:"Montserrat-Regular",
                    color:'#000'
                }}>
                    Favorites
                </Text>

            </TouchableOpacity>

            <TouchableOpacity
            style={{
                backgroundColor:'#FFDEDE',
                marginTop:'5%',
                height:'28%',
                width:'90%',
                borderColor:'#000',
                borderRadius:5,
                borderWidth:2,
                justifyContent:'center',
                alignItems:'center'
            }}
            onPress={()=>showAlert()}
            >
                <Text style={{
                    fontSize:28,
                    fontFamily:"Montserrat-Regular",
                    color:'#000'
                }}>
                    Update Name
                </Text>

            </TouchableOpacity>
        </View>
    )
}

export default ProfileScreen;