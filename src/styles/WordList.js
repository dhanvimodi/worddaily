import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    wordContainer:{
        justifyContent:'center',        
        alignItems:'center',
        textAlign:'center',
        marginLeft:'5%',
        marginRight:'5%',
       // width: '90%',
       // backgroundColor:'pink',
       // marginTop:'40%',

      },
      word:{
        color: '#000',
        letterSpacing: 2,
        fontSize: 32,
        fontWeight: 'bold',
       // marginTop: '10%',
        fontFamily: 'Montserrat-Bold',
      },
      phonetic:{
        color: '#162017',
        letterSpacing: 3,
        fontSize: 14,
        fontFamily: 'Montserrat-Light',
       // marginTop: '2%',
      },
      partOfSpeech:{
        color: '#162017',
        letterSpacing: 3,
        fontSize: 14,
        marginTop: '10%',
        textAlign:'left',
        fontFamily: 'Montserrat-Light',
      },
      meaning:{
        color: '#000',
        fontSize: 18,
        textAlign:'center',
        marginTop: '1%',
        letterSpacing: 2,
        fontFamily: 'Montserrat-Regular',
      },
      sentence:{
        color: '#000',
        fontSize: 16,
        marginTop: '15%',
        letterSpacing: 2,
        fontFamily: 'Montserrat-Regular',
                textAlign:'center',

      },
      soundButton:{
        marginTop:'23%',
        opacity:0.6
       }
})
export default styles;