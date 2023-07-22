import Share from 'react-native-share';
import RNFS from "react-native-fs";

export const captureAndShareScreenshot = (ref) => {
    console.log("captureAndShareScreenshot");
    if (!ref || !ref.current) {
      return;
    }
    ref.current.capture().then((uri) => {
      RNFS.readFile(uri, "base64").then((res) => {
        let urlString = "data:image/jpeg;base64," + res;
        let options = {
         // title: "Share Title",
          message: "A Word Guru",
          url: urlString,
          type: "image/jpeg",
        };
        Share.open(options)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            err && console.log(err);
          });
      });
    });
  };