import { StyleSheet } from "react-native";
import { scaleFont } from "../utils/responsiveFontSize";

const styles = StyleSheet.create({
    container:{
       height: '100%',
        width: '100%',
        backgroundColor:"#fff",
        justifyContent: 'center',
        alignItems: 'center'
      },
      innerContainer:{
        width: '95%',
        flex:1,
        marginTop:'5%',
       // justifyContent:'space-evenly',
       // gap:.5,
        alignItems:'center'
      },
      name:{
        color: '#030303',
        letterSpacing: 2,
        fontSize: scaleFont(24),
        fontFamily: 'Montserrat-SemiBold',
      },
      cardHeading:{
        color: '#000',
        fontSize: scaleFont(16),
        marginTop: '2%',
        fontFamily: 'Montserrat',
        textAlign:'center'
      },
      word:{
        color: '#000',
       textAlign:'center',
        fontSize: scaleFont(30),
        marginTop: '6%',
        fontFamily: 'Montserrat-SemiBold',
      },
      
      // name:{
      //   color: '#1e1e1e',
      //   fontWeight: 'bold',
      //   letterSpacing: 2,
      //   fontSize: 20,
      // //  marginTop: '30%',
      // },
      // heading:{
      // //  marginTop: '20%',
      //   color: '#162016',
      //   letterSpacing: 3,
      //   fontSize: 18,
      // },


})

export default styles;