import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container:{
    height: '100%',
    width: '100%',
    // justifyContent: 'center',
     alignItems: 'center',
    backgroundColor:"#dfdfdf",
  },
    image:{
        height: '35%',
        aspectRatio: 1.8 / 2,
        // width: '50%',
        marginTop: '10%',
      },
      text:{
        marginTop: '10%',
        color: 'black',
        fontSize: 45,
        width: '70%',
        letterSpacing: 1,
        // textAlign: 'center',
      },
      descriptionText:{
        marginTop: '6%',
        color: 'black',
        fontSize: 20,
        width: '70%',
        letterSpacing: 1,
        //textAlign: 'center',
      },
      buttonContainer:{
        marginTop: '15%',
        alignSelf: 'flex-end',
        marginRight: '15%',
      },
      
})

export default styles;