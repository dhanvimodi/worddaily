import {StyleSheet} from 'react-native';
import { scaleFont } from '../utils/responsiveFontSize';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  flatList:{
    width:'100%',
    height:'100%',
    marginTop:'15%'
  },
  cardContainer: {
    marginLeft:'5%',
    width: '90%',
   // width: '100%',
    backgroundColor: '#9BCDD2',
    justifyContent: 'center',
   // alignItems: 'flex-left',
    paddingHorizontal: 30,
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: '5%',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  favoriteCardContainer: {
    marginLeft:'5%',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: '5%',
    borderRadius: 10
  },
  favoriteCardSubTitle:{
    fontSize: scaleFont(18),
    marginTop:'5%',
    color: '#000',
    fontFamily: 'Montserrat-Regular',
  },
  favoriteCardTitle: {
    fontSize: scaleFont(30),
    color: '#000',
    fontFamily: 'Montserrat-SemiBold',
  },
  cardTitle: {
    fontSize: scaleFont(24),
    color: '#000',
    fontFamily: 'Montserrat-SemiBold',
  },
  cardMeaning:{
    fontSize: scaleFont(16),
    color: '#000',
    fontFamily: 'Montserrat-Regular',
    marginTop:'3%'
  },
  cardSentence:{
    color:'#000',
    fontFamily: 'Montserrat-LightItalic',
    fontSize: scaleFont(14),
  }
});
export default styles;
