import { NativeModules } from 'react-native';

const { AlarmModule } = NativeModules;

const AlarmManager = {
  scheduleAlarm: () => {
    if (AlarmModule && AlarmModule.scheduleAlarm) {
      AlarmModule.scheduleAlarm();
    } else {
      console.error('AlarmModule or scheduleAlarm method not available.');
    }
  },
};

export default AlarmManager;
