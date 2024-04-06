import AsyncStorage from "@react-native-async-storage/async-storage";
import vocab from '../../mockData/vocab.json'

export async function storeVocabData() {
    try{
        //console.debug("Storing vocab data")
        await AsyncStorage.setItem('vocab', JSON.stringify(vocab));
      }
      catch(error){
        console.log(error)
      }
}

export async function fetchVocabData() {
  //console.log("In fetch vocab data")
  try {
    const value = await AsyncStorage.getItem('vocab');
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function updateVocabFavorite(data){
  //  console.log("updateVocabData")
    try {
        const value = await AsyncStorage.getItem('vocab');
        if (value !== null) {
            // We have data!!
           // console.log(value);
            var vocab=JSON.parse(value)
            vocab.forEach((element,index) => {
                if(element.word===data.word){
                    element.favorite=!data.favorite
                    console.log(index)
                }
            })
            try {
                await AsyncStorage.setItem("vocab",JSON.stringify(vocab));
            } catch (error) {
                console.log(error);
            }
        }
      } catch (error) {
        console.log(error);
      }
}

