import { StyleSheet } from "react-native";
import { scaleFont } from "../utils/responsiveFontSize";

const styles = StyleSheet.create({
    carouselContainer:{
        height:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    carouselContentContainer:{
       marginTop:'15%',
    },
    buttonContainer:{
        backgroundColor: '#fff',
          height: '10%',
          alignSelf: 'center',
          width: '90%',
          marginBottom: '8%',
          borderRadius: 10,
    },
    buttonInnerContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: '#220a6a',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#220a6a',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 15,
        padding:'5%',
        paddingHorizontal:'10%'
    },
    buttonText:{
        color: '#fff',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: scaleFont(24),
    },
    nextPageButton:{
        height: '6%',
        alignSelf: 'flex-end',
       marginRight:'15%',
        marginBottom: '8%',
        borderRadius: 10,
    },
    nextPageButtonContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: '#f1f0f8',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#220a6a',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 15,
        paddingHorizontal:'7%'
    },
    nextText:{
        color: '#000',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: scaleFont(24)
    }
})
export default styles;