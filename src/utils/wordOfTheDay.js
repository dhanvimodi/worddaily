import AsyncStorage from '@react-native-async-storage/async-storage';
import wordOfTheDayData from '../../mockData/wordOfTheDayData.json'

export async function storeWordOfTheDayData() {
  try{
    //console.debug("Storing word of the day data")
    await AsyncStorage.setItem('wordOfTheDay', JSON.stringify(wordOfTheDayData));
  }
  catch(error){
    console.log(error)
  }
}

export async function fetchWordOfTheDayData() {
//   console.log("In get Data function")

  var wordOfTheDayData = [];
  try {
    var data = await AsyncStorage.getItem('wordOfTheDay');
    //console.log(data)
    wordOfTheDayData = JSON.parse(data);
  } catch (error) {
    console.log(error);
  }

//  var lastUpdatedDate = await AsyncStorage.getItem('lastUpdatedDate');
//  var numberOfDaysVisited = Number(
//    await AsyncStorage.getItem('numberOfDaysVisited'),
//  );
//
//  var todaysDate = new Date().getDate().toString();
//  var idx =
//    lastUpdatedDate === todaysDate
//      ? numberOfDaysVisited % wordOfTheDayData.length
//      : (numberOfDaysVisited + 1) % wordOfTheDayData.length;

const today = new Date();
const day = today.getDate();

  var data = wordOfTheDayData[day-1];
//  console.log("data is",data);
//  updateDailyData(lastUpdatedDate, numberOfDaysVisited);
  return data;
}

//export async function updateDailyData(lastUpdatedDate, numberOfDaysVisited) {
//  todaysDate = new Date().getDate().toString();
//  if (todaysDate !== lastUpdatedDate) {
//    try {
//      await AsyncStorage.setItem('lastUpdatedDate', todaysDate);
//      await AsyncStorage.setItem(
//        'numberOfDaysVisited',
//        (numberOfDaysVisited + 1).toString(),
//      );
//    } catch (error) {
//      console.log(error);
//    }
//  }
//}

export async function updateWordOfTheDayFavorite(data){
  //  console.log("updateWordOfTheDayData")
    try {
        const value = await AsyncStorage.getItem('wordOfTheDay');
        if (value !== null) {
            // We have data!!
           // console.log(value);
            var vocab=JSON.parse(value)
            vocab.forEach((element,index) => {
                if(element.word===data.word){
                    element.favorite=!data.favorite
                   // console.log(element)
                }
            })
            try {
                await AsyncStorage.setItem("wordOfTheDay",JSON.stringify(vocab));
            } catch (error) {
                console.log(error);
            }
        }
      } catch (error) {
        console.log(error);
      }
}
