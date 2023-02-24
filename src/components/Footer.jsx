import { View } from "react-native"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Footer=()=>{
    return(
        <View style={{
            backgroundColor: '#e5f7fb',
            height:"6%",
            paddingBottom:"2%",
            paddingHorizontal:"10%",
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center"
        }}>
            <MaterialIcons.Button backgroundColor="transparent" onPress={()=>console.log("clicked")} name="dashboard" color="#8a9496" size={28} />
            <MaterialIcons name="calendar-today" color="#8a9496" size={28} />
            <MaterialIcons name="bookmarks" color="#8a9496" size={28} />
            <MaterialIcons name="settings" color="#8a9496" size={28} />
            
        </View>
    )
}
export default Footer