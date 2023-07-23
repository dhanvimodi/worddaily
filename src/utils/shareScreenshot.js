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
           message: "A Word Guru",
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

      //  console.log('url string', urlString)
      //   Share.share({ message: 'This is a message', url: urlString },
      //   {
      //     dialogTitle: 'Share Today',
      //     excludedActivityTypes: [
      //       'com.apple.mobilenotes.SharingExtension',
      //       'com.apple.reminders.RemindersEditorExtension'
      //     ]
      //   })
      //   .then(({action, activityType}) => {
      //     if(action === Share.dismissedAction) console.log('Share dismissed');
      //     else console.log('Share successful');
      //   });
    });
  });
  }

  // const addTextToImage = async (imageUri) => {
  //   console.log("addTextToImage");
  //   try {
  //     // Replace this with your desired text
  //     const text = 'Hello, this is my screenshot!';

  //     // Replace this with the font family you want to use
  //     const fontFamily = Platform.select({
  //       ios: 'Arial',
  //       android: 'Roboto',
  //     });

  //     const textSvg = `
  //       <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  //         <text x="50%" y="50%" fill="white" font-size="30" font-family="${fontFamily}" text-anchor="middle">${text}</text>
  //       </svg>
  //     `;

  //     const overlayUri = `data:image/svg+xml;base64,${Buffer.from(textSvg).toString('base64')}`;

  //     return overlayUri;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };