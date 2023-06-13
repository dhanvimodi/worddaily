import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      heading:{
        marginTop: '15%',
        color: '#000',
        fontSize: 22,
        width: '70%',
        letterSpacing: 2,
        textAlign: 'center',
        fontFamily: 'Montserrat-Regular',
      },
      inputBox:{
        height: '7%',
        width: '60%',
        marginTop: '15%',
        borderRadius: 10,
        color: '#000',
        paddingLeft: 10,
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        borderBottomWidth: 3,
        borderRightWidth: 3,
        borderBottomColor: '#000',
        borderRightColor: '#000',
        //borderColor: '#e5c84c',
        backgroundColor: 'white',
      },
      buttonContainer:{
        marginTop: '40%',
        height: '10%',
        width: '60%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonInnerContainer:{
        backgroundColor: '#162016',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
      },
      buttonText:{
        color: 'white',
        fontSize: 28,
        textAlign: 'center',
        fontFamily: 'Montserrat-Regular',
      }
})

export default styles;