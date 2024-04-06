package com.worddaily;

import android.app.AlarmManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.util.Log;
import android.widget.Toast;
import android.content.SharedPreferences;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import com.worddaily.AlarmReceiver;
import java.util.Calendar;

public class AlarmModule extends ReactContextBaseJavaModule {

    private static final String TAG = "AlarmModule";
    private static final String ALARM_ACTION = "com.worddaily.ALARM_ACTION";

    private final ReactApplicationContext reactContext;

    public AlarmModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "AlarmModule";
    }

    @ReactMethod
    public void scheduleAlarm() {
        Calendar calendar = Calendar.getInstance();

        // Check if it's past the scheduled time (4:30 PM)
        if (isPastScheduledTime(calendar)) {
            calendar.add(Calendar.DAY_OF_YEAR, 1);
        }



        // Set time for tomorrow's notification ()
        calendar.set(Calendar.HOUR_OF_DAY, 10);
        calendar.set(Calendar.MINUTE, 30); 
        calendar.set(Calendar.SECOND, 0);
calendar.set(Calendar.MILLISECOND, 0);
        long triggerTime = calendar.getTimeInMillis();

        Intent intent = new Intent(reactContext, AlarmReceiver.class);
        AlarmManager alarmManager = (AlarmManager) reactContext.getSystemService(Context.ALARM_SERVICE);
        PendingIntent pendingIntent = PendingIntent.getBroadcast(
                reactContext.getApplicationContext(), 0, intent, PendingIntent.FLAG_IMMUTABLE);
        // Use recommended approach for API level 19+
        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.KITKAT) {
            alarmManager.setInexactRepeating(AlarmManager.RTC_WAKEUP, triggerTime, AlarmManager.INTERVAL_DAY, pendingIntent); // **LINE 2**
        } else {
            // For pre-KITKAT (API level 19-), use a conversion (consider migrating to newer APIs if possible)
            alarmManager.setInexactRepeating(AlarmManager.RTC_WAKEUP, triggerTime, 24 * 60 * 60 * 1000, pendingIntent);
        }
    }

    private boolean isPastScheduledTime(Calendar calendar) {
        // Set the time for 4:30 PM today
        Calendar scheduledTime = Calendar.getInstance();
        scheduledTime.set(Calendar.HOUR_OF_DAY, 10);
        scheduledTime.set(Calendar.MINUTE, 30);
        scheduledTime.set(Calendar.SECOND, 0);
        scheduledTime.set(Calendar.MILLISECOND, 0);

        return calendar.getTimeInMillis() >= scheduledTime.getTimeInMillis();
    }

}
