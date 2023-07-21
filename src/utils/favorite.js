import AsyncStorage from "@react-native-async-storage/async-storage"
import wordOfTheDay from "../../mockData/wordOfTheDayData.json"

export async function addFavorite(data){
  //await AsyncStorage.removeItem("favorites")
   // console.log("addFavorite function in favorite.js")
    var favorites=await AsyncStorage.getItem("favorites")
    if(favorites===null){
        favorites=[]
        favorites.push({...data,favorite:true})
        try {
            await AsyncStorage.setItem("favorites",JSON.stringify(favorites));
          } catch (error) {
            console.log(error);
          }    
    }
    else{
        favorites=JSON.parse(favorites)
        var updatedFavorites=[...favorites,{...data,favorite:true}]
       // console.log(updatedFavorites)
        try {
            await AsyncStorage.setItem("favorites",JSON.stringify(updatedFavorites));
          } catch (error) {
            console.log(error);
          }    
    }
}

export async function getFavorites(){

   // console.log("getFavorites")
    var favorites=await AsyncStorage.getItem("favorites")
    if(favorites===null){
        favorites=[]
    }
    else{
     // console.log(favorites)
        favorites=JSON.parse(favorites)
    }
    console.log("in get favorites",favorites.length)
   // return favorites
   
  //  var favoritesArray=[...favorites]
  //  favorites.forEach((element,index) =>  console.log(element.word+index))
    return favorites
}

export async function removeFavorite(data){
 // console.log("In remove favorite function")
    var favorites=await AsyncStorage.getItem("favorites")
    if(favorites===null){
        favorites=[]
    }
    else{
        favorites=JSON.parse(favorites)
       // console.log(favorites)
        var updatedFavorites=favorites.filter((element)=> element.word!==data.word)
        try {
            await AsyncStorage.setItem("favorites",JSON.stringify(updatedFavorites));
          } catch (error) {
            console.log(error);
          }    
    }
}


