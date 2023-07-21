import AsyncStorage from "@react-native-async-storage/async-storage"
//import wordOfTheDayData from "../../mockData/wordOfTheDayData.json"

export async function getData(){
 // console.log("In get Data function")


  var wordOfTheDayData=[]
  try{
    var data=await AsyncStorage.getItem("wordOfTheDay")
    //console.log(data)
    wordOfTheDayData=JSON.parse(data)
  }
  catch(error){
    console.log(error)
  }

    var lastUpdatedDate=await AsyncStorage.getItem("lastUpdatedDate")
    var numberOfDaysVisited= Number(await AsyncStorage.getItem("numberOfDaysVisited"))

    var todaysDate=new Date().getDate().toString()
    var idx=lastUpdatedDate===todaysDate? numberOfDaysVisited%wordOfTheDayData.length : (numberOfDaysVisited+1)%wordOfTheDayData.length

    
    var data=wordOfTheDayData[idx]
    updateData(lastUpdatedDate,numberOfDaysVisited);
    return [data, numberOfDaysVisited]
}

export async function updateData(lastUpdatedDate,numberOfDaysVisited) {
    todaysDate=new Date().getDate().toString()
    if(todaysDate!==lastUpdatedDate){
        try {
            await AsyncStorage.setItem("lastUpdatedDate",todaysDate);
            await AsyncStorage.setItem("numberOfDaysVisited",(numberOfDaysVisited+1).toString());
          } catch (error) {
            console.log(error);
          }
    }
    
  };