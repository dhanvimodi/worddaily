import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        height:'25%',
        marginTop:'15%',
        backgroundColor:'#030303',
        borderRadius:25,
        padding:'5%',
        marginLeft:'5%',
       // alignItems:'center'
       // width:'100%'
    },
    buttonRowContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-evenly',
      //  height:'0%'
    },
    buttonContainer: {
        backgroundColor:'#fff',
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
        fontSize: 14,
        marginTop: '2%',
        fontFamily: 'Montserrat-SemiBold',
      }
})
export default styles;