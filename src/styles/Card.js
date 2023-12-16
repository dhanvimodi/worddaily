import { StyleSheet } from "react-native";
import { scaleFont } from "../utils/responsiveFontSize";

const styles = StyleSheet.create({
    container:{
        height:'40%',
        marginTop:'10%',
       // backgroundColor:'#030303',
        borderRadius:25,
        padding:'5%',
       // marginLeft:'5%',
       // alignItems:'center'
       // width:'100%'
       
        shadowColor: '#220a6a',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 10,
    },
    buttonRowContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-evenly',
      //  height:'0%'
    },
    buttonContainer: {
        backgroundColor:'#f1f0f8',
        width:'45%',
        marginTop:'10%',
        height:'50%',
        borderRadius:10,
        alignSelf:'center',
        justifyContent:'center'
    },
    buttonText:{
        color: '#000',
        letterSpacing: 2,
       // fontWeight: 'bold',
       textAlign:'center',
      // textAlignVertical:'center',
        fontSize: scaleFont(14),
        marginTop: '2%',
        fontFamily: 'Montserrat-SemiBold',
      }
})
export default styles;