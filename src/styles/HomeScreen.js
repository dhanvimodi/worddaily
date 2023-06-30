import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
       height: '100%',
        width: '100%',
        backgroundColor:"#dfdfdf",
        justifyContent: 'center',
        alignItems: 'center'
      },
      innerContainer:{
        width: '80%',
        flex:1
      },
      name:{
        color: '#030303',
        letterSpacing: 2,
        //fontWeight: 'bold',
        fontSize: 24,
        marginTop: '20%',
        marginBottom:'10%',
        fontFamily: 'Montserrat-SemiBold',
      },
      cardHeading:{
        color: '#c0bebe',
       // letterSpacing: 2,
       // fontWeight: 'bold',
        fontSize: 16,
        marginTop: '2%',
        fontFamily: 'Montserrat-Thin',
        textAlign:'center'
      },
      word:{
        color: '#fff',
       // letterSpacing: 2,
       // fontWeight: 'bold',
       textAlign:'center',
        fontSize: 24,
        marginTop: '8%',
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