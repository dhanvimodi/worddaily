import { StyleSheet } from "react-native";
import { scaleFont } from "../utils/responsiveFontSize";

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'white',
        // alignItems: 'center',
         borderRadius: 20,
        // width: ITEM_WIDTH,
         height:'100%',
         paddingTop:20,
         paddingBottom: 40,
         width:'100%',
         // shadowColor: '#220a6a',
         // shadowOffset: {width: -2, height: 4},
         // shadowOpacity: 0.2,
         // shadowRadius: 3,
         // elevation: 10,
        // justifyContent:'space-around'
       },
       image: {
         alignSelf: 'center',
         //width: '90%',
         height: '52%',
         aspectRatio: 1,
         marginBottom:'15%',
         borderRadius: 20,
       },
       secondImage:{
         alignSelf: 'center',
         //width: '90%',
         height: '52%',
         aspectRatio: 4/3,
         marginBottom:'15%',
         borderRadius: 20,
       },
       header: {
         color: "#220a6a",
         fontFamily: 'Montserrat-Bold',
         fontSize: scaleFont(32),
        // fontWeight: "bold",
        marginLeft:'7%',
        marginRight:'7%',
     
       //  paddingLeft: 20,
      //   paddingTop: 
       },
       body: {
         color: "#000",
         fontFamily: 'Montserrat-Regular',
         fontSize: 18,
         // paddingLeft: 20,
         // paddingLeft: 20,
         // paddingRight: 20,
         marginRight:'7%',
         marginLeft:'7%',
         marginTop:'5%'
       },
       headerTitle:{
        marginTop: '5%'
      },
      headerBody:{
        marginTop: '20%',
      },
      nameInput:{
        height: '12%',
        alignSelf: 'center',
        width: '60%',
        marginTop: '25%',
        borderRadius: 10,
        color: '#000',
        paddingLeft: 10,
        fontFamily: 'Montserrat-Regular',
        fontSize: scaleFont(16),
        borderBottomWidth: 3,
        borderRightWidth: 3,
        borderBottomColor: '#220a6a',
        borderRightColor: '#220a6a',
        backgroundColor: '#f1f0f8',
        shadowColor: '#220a6a',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 15,
      },
      nameInputKeyboard:{
        marginBottom:"20%"

      }

})
export default styles;