import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start'
      },
      innerContainer:{
        marginLeft: '10%',
        width: '80%',
        height: '100%'
      },
      name:{
        color: '#1e1e1e',
        fontWeight: 'bold',
        letterSpacing: 2,
        fontSize: 20,
        marginTop: '30%',
      },
      wordContainer:{
        height: '70%'
      },
      heading:{
        marginTop: '20%',
        color: '#162016',
        letterSpacing: 3,
        fontSize: 18,
      },
      word:{
        color: '#000',
        letterSpacing: 2,
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: '10%',
        fontFamily: 'Montserrat-Bold',
      },
      phonetic:{
        color: '#162017',
        letterSpacing: 3,
        fontSize: 18,
        marginTop: '3%',
      },
      partOfSpeech:{
        color: '#162017',
        letterSpacing: 3,
        fontSize: 18,
        marginTop: '2%',
      },
      meaning:{
        color: '#000',
        fontSize: 21,
        marginTop: '10%',
        letterSpacing: 2,
        fontFamily: 'Montserrat-Medium',
      },
      sentence:{
        color: '#000',
        fontSize: 19,
        marginTop: '15%',
        letterSpacing: 2,
        fontFamily: 'Montserrat-Regular',
      }

})

export default styles;