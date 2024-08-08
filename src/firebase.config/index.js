// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGHUlyBixnX2hmBJDEvtagKzNjpreI8j4",
  authDomain: "react-push-notification-850c2.firebaseapp.com",
  projectId: "react-push-notification-850c2",
  storageBucket: "react-push-notification-850c2.appspot.com",
  messagingSenderId: "177405328302",
  appId: "1:177405328302:web:665312165b6c7d10c0e63f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

const generateToken = async () => {
  const permission = await Notification.requestPermission();
  console.log("permission: ", permission);
  if (permission === "granted") {
    const token = await getToken(messaging, {
      vapidKey:
        "BHDb5EQAjpI71UOaxjq6wEPnLkgHYWuLlF06823fYnjBoCzHZqibmRbN-OxDZuc70JGNcW-oDC1OERl5dlXHG9M",
    });
    console.log("Token: ", token);
  }
};

export { messaging, getToken, onMessage, generateToken };
