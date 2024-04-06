import AsyncStorage from "@react-native-async-storage/async-storage"

export async function addFavorite(data){
   // console.log("addFavorite function in favorite.js")
    var favorites=await AsyncStorage.getItem("favorites")
    //console.log("in add favorite function")
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
        var index = favorites.findIndex(x => x.word===data.word);
       // console.log(index) 
        index === -1 ? favorites.push({...data,favorite:true}) : null
        //favorites.indexOf(data)=== -1 ? favorites.push({...data,favorite:true}) :null
       // var updatedFavorites=[...favorites,{...data,favorite:true}]
     //   console.log(favorites)
        try {
            await AsyncStorage.setItem("favorites",JSON.stringify(favorites));
          } catch (error) {
            console.log(error);
          }    
    }
}

export async function fetchFavorites(){

    //console.log("in fetch Favorites")
    var favorites=await AsyncStorage.getItem("favorites")
    if(favorites===null){
        favorites=[]
    }
    else{
     // console.log(favorites)
        favorites=JSON.parse(favorites)
    }
   // console.log("in fetch favorites",favorites)
    return favorites
}

export async function removeFavorite(data){
  //console.log("In remove favorite function")
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


