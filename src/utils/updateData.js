import AsyncStorage from "@react-native-async-storage/async-storage";

export async function updateVocabData(data){
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
                    //console.log(element)
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

export async function updateWordOfTheDayData(data){
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