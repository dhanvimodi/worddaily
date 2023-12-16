import PushNotification from "react-native-push-notification";

export const createChannel = () => {
  console.log("createChannel");
  PushNotification.createChannel({
    channelId: "DailyReminder", // (required)
    channelName: "Daily Reminder", // (required)
  },
  (created) => console.log(`createChannel returned '${created}'`) )
}