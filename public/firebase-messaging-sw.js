import { getMessaging } from "firebase/messaging/sw";
import { onBackgroundMessage } from "firebase/messaging/sw";
import { initializeApp } from "firebase/app";

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
const firebaseApp = initializeApp({
  apiKey: "AIzaSyDGHUlyBixnX2hmBJDEvtagKzNjpreI8j4",
  authDomain: "react-push-notification-850c2.firebaseapp.com",
  projectId: "react-push-notification-850c2",
  storageBucket: "react-push-notification-850c2.appspot.com",
  messagingSenderId: "177405328302",
  appId: "1:177405328302:web:665312165b6c7d10c0e63f",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.

const messaging = getMessaging(firebaseApp);
onBackgroundMessage(messaging, (payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.body,
    icon: payload.data.icon,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
