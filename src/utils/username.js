import AsyncStorage from '@react-native-async-storage/async-storage';

export async function fetchUserName(){
    var name;
    try {
       name= await AsyncStorage.getItem('username')
      } catch (error) {
        console.log(error);
      }

      return name
}

export async function storeUserName(name){
  todaysDate = new Date().getDate().toString();
  try {
    await AsyncStorage.setItem('username', name);
    await AsyncStorage.setItem('lastUpdatedDate', todaysDate);
    await AsyncStorage.setItem('numberOfDaysVisited', '0');
  } catch (error) {
    console.log(error);
  }
}