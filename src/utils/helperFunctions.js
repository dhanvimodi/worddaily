import AsyncStorage from "@react-native-async-storage/async-storage"
import mockData from "../../mockData/mockData.json"

export async function getData(){
    var lastUpdatedDate=await AsyncStorage.getItem("lastUpdatedDate")
    var numberOfDaysVisited= Number(await AsyncStorage.getItem("numberOfDaysVisited"))

    console.log("lastUpdatedDate",lastUpdatedDate)
    console.log("numberOfDaysVisited",numberOfDaysVisited)
    var todaysDate=new Date().getDate().toString()
    var idx=lastUpdatedDate===todaysDate? numberOfDaysVisited%mockData.length : (numberOfDaysVisited+1)%mockData.length

    var data=mockData[idx]
    console.log(data)
    updateData(lastUpdatedDate,numberOfDaysVisited);
    return data
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