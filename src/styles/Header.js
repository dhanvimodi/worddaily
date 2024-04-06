import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{       
        width: '100%',
        backgroundColor:'#d1d0f0',
        paddingTop:'15%',
        paddingHorizontal:'10%',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      greeting:{
        color: '#220a6a',
        letterSpacing: 2,
        fontSize: scaleFont(30),
        marginLeft: '5%',
        fontFamily: 'Montserrat-Bold'
      },
      favoriteHeading:{
        color: '#220a6a',
      letterSpacing: 2,
      fontSize: scaleFont(28),
      marginRight: '10%',
      fontFamily: 'Montserrat-Bold'
    }
})
export default styles;