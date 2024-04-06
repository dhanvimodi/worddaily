package com.worddaily;

import android.content.BroadcastReceiver;
import android.content.SharedPreferences;
import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.util.Log;
import android.widget.Toast;
import android.app.Notification;
import android.app.NotificationManager;
import android.app.NotificationChannel;
import android.app.PendingIntent;
import android.net.Uri;

import org.json.JSONArray;
import org.json.JSONObject;
import org.json.JSONException;

import java.io.IOException;
import java.io.InputStream;

import java.util.List;
import java.util.ArrayList;
import java.time.LocalDate;

public class AlarmReceiver extends BroadcastReceiver{

    private static final String CHANNEL_ID = "notification_channel";


    @Override
    public void onReceive(Context context, Intent intent){

        //Log.i("AlarmReceiver","in on receive");


        JSONObject dailyWord = getRandomJsonObject(context);
        String title;
        try {
            if (dailyWord != null && dailyWord.has("word")) {
                title = dailyWord.getString("word");
            } else {
                title = "Daily Reminder";
            }
        } catch (JSONException e) {
            // Handle the exception here (e.g., log the error, display a default message)
            e.printStackTrace();
            title = "Daily Reminder"; // Or set a default value
        }

        String meaning;
        try {
            if (dailyWord != null && dailyWord.has("meaning")) {
                meaning = dailyWord.getString("meaning");
            } else {
                meaning = "Learn new words";
            }
        } catch (JSONException e) {
            // Handle the exception here (e.g., log the error, display a default message)
            e.printStackTrace();
            meaning = "Learn new words"; // Or set a default value
        }

        Intent notificationIntent = new Intent(context, MainActivity.class);
        PendingIntent pendingIntent = PendingIntent.getActivity(context, 0, notificationIntent, PendingIntent.FLAG_IMMUTABLE);

        Notification.Builder notification =
                new Notification.Builder(context,CHANNEL_ID)
                        .setSmallIcon(R.drawable.notification_icon) //set icon for notification
                        .setContentTitle(title) //set title of notification
                        .setContentText(meaning)
                        .setContentIntent(pendingIntent)
                        .setAutoCancel(true);
        //this is notification message
       // Log.i("Notification","notification build");
        NotificationManager notificationManager = (NotificationManager) context.getSystemService(Context.NOTIFICATION_SERVICE);

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            NotificationChannel channel = new NotificationChannel(CHANNEL_ID, "A Word Guru notification!", NotificationManager.IMPORTANCE_HIGH);
            notificationManager.createNotificationChannel(channel);
        }

        //Log.i("NotificationManager","notification manager created");
        notificationManager.notify(123250, notification.build());
    }

    public static JSONObject getRandomJsonObject(Context context) {
        // Read the JSON file
        try {
            // Read JSON file from assets
            InputStream is = context.getApplicationContext().getAssets().open("words.json");
            int size = is.available();
            byte[] buffer = new byte[size];
            is.read(buffer);
            is.close();

            String jsonString = new String(buffer, "UTF-8");

            JSONArray jsonArray = new JSONArray(jsonString);


            // Check if the array is empty
//            if (jsonArray.isEmpty()) {
//                throw new Exception("JSON array is empty");
//            }

            LocalDate today = LocalDate.now();
            int day = today.getDayOfMonth();
            return jsonArray.getJSONObject(day-1);
        }
        catch (IOException | JSONException e) {
            Log.e("AlarmReceiver", "Error reading JSON file: " + e.getMessage());
            return null;
        }
    }
}
