import Share from 'react-native-share';
import RNFS from "react-native-fs";


export async function captureAndShareScreenshot(ref) {
  //  console.log("captureAndShareScreenshot");
    if (!ref || !ref.current) {
      return;
    }
    ref.current.capture().then((uri) => {
      RNFS.readFile(uri, "base64").then((res) => {
        let urlString = "data:image/jpeg;base64," + res;
       
        //const overlayUri = addTextToImage(urlString);

        let options = {
          // title: "Share Title",
           message:`Hey,\n\nWords can be magical, and A Word Guru is here to prove it! Dive into a world of remarkable words waiting to be shared.\n\n🔍 Explore captivating vocabulary.\n💬 Share the magic with friends.\n🌟 Learn and enjoy the ride!\n\nReady to start? Download now:\nhttps://play.google.com/store/apps/details?id=com.worddaily\n\nHappy word-sharing!\nA Word Guru Team`,
           url: urlString,
           type: "image/jpeg"
         };
       Share.open(options)
        .then((res) => {
            console.log("action in share",res);
          })
          .catch((err) => {
            err && console.log(err);
          });

    });
  });
  }
