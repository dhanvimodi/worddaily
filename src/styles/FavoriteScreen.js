import {StyleSheet} from 'react-native';

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
    marginLeft:'20%',
    width: '60%',
   // width: '100%',
    backgroundColor: '#9BCDD2',
    justifyContent: 'center',
    alignItems: 'center',
   // padding: 10,
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
  cardTitle: {
    fontSize: 24,
    color: '#000',
    fontFamily: 'Montserrat-Regular',
  },
});
export default styles;
