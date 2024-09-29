import AsyncStorage from "@react-native-async-storage/async-storage";
import sat from '../../mockData/satdata.json'

export async function storeSatData() {
    try{
        //console.debug("Storing vocab data")
        await AsyncStorage.setItem('sat', JSON.stringify(sat));
      }
      catch(error){
        console.log(error)
      }
}

export async function fetchSatData() {
  //console.log("In fetch vocab data")
  try {
    const value = await AsyncStorage.getItem('sat');
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (error) {
    console.log(error);
  }
}

// export async function updateVocabFavorite(data){
//   //  console.log("updateVocabData")
//     try {
//         const value = await AsyncStorage.getItem('vocab');
//         if (value !== null) {
//             // We have data!!
//            // console.log(value);
//             var vocab=JSON.parse(value)
//             vocab.forEach((element,index) => {
//                 if(element.word===data.word){
//                     element.favorite=!data.favorite
//                     console.log(index)
//                 }
//             })
//             try {
//                 await AsyncStorage.setItem("vocab",JSON.stringify(vocab));
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//       } catch (error) {
//         console.log(error);
//       }
// }

