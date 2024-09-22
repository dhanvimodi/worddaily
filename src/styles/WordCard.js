import { StyleSheet } from "react-native";
import { scaleFont } from "../utils/responsiveFontSize";

const styles = StyleSheet.create({
    wordContainer:{
        justifyContent:'center',        
        alignItems:'center',
        textAlign:'center',
        marginLeft:'5%',
        marginRight:'5%',
       // width: '90%',
        // backgroundColor:'pink',
        // marginTop:'6%',

      },
      wordInnerContainer:{
        // backgroundColor:'pink',
        width: '98%',
        height: '95%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '3%',
        borderStyle: 'solid',
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        backgroundColor: '#fff',
      },
      word:{
        color: '#000',
        letterSpacing: 2,
        fontSize: scaleFont(32),
        fontWeight: 'bold',
       // marginTop: '10%',
        fontFamily: 'Montserrat-Bold',
      },
      phonetic:{
        color: '#162017',
        letterSpacing: 3,
        fontSize: scaleFont(14),
        fontFamily: 'Montserrat-Light',
       // marginTop: '2%',
      },
      partOfSpeech:{
        color: '#162017',
        letterSpacing: 3,
        fontSize: scaleFont(14),
        marginTop: '10%',
        textAlign:'left',
        fontFamily: 'Montserrat-Light',
      },
      meaning:{
        color: '#000',
        fontSize: scaleFont(18),
        textAlign:'center',
        marginTop: '1%',
        letterSpacing: 2,
        fontFamily: 'Montserrat-Regular',
      },
      sentence:{
        color: '#000',
        fontSize: scaleFont(16),
        marginTop: '15%',
        letterSpacing: 2,
        fontFamily: 'Montserrat-Regular',
                textAlign:'center',

      },
      button:{
       // marginTop:'23%',
       // opacity:0.6
       },
       buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        marginTop:'23%',
        width:'100%'
       },
       appName:{
        color:'#000',
        marginTop:'5%',
        fontFamily:'Montserrat-Medium',
        color:'#220a6a',
      }
})
export default styles;