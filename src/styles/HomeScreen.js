import { StyleSheet } from "react-native";
import { scaleFont } from "../utils/responsiveFontSize";

const styles = StyleSheet.create({
  scrollView: {
   //  height: '100%',
   //  backgroundColor:'orange',
    // width: '100%',
    //flexGrow:1,
    // flex:1,
   // margin: 20,
   // alignSelf: 'center',
   // padding: 20,
  },
  contentContainer: {
    height:'120%',
   //  flexGrow:1,
   // justifyContent: 'center',
    alignItems: 'center',
  // backgroundColor:'red',
    paddingBottom: '15%'
  },
      name:{
        color: '#030303',
        letterSpacing: 2,
        fontSize: scaleFont(24),
        fontFamily: 'Montserrat-SemiBold',
      },
      cardHeading:{
        color: '#000',
        fontSize: scaleFont(20),
        marginTop: '2%',
        fontFamily: 'Montserrat-SemiBold',
        textAlign:'center'
      },
      word:{
        color: '#220a6a',
       textAlign:'center',
        fontSize: scaleFont(18),
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