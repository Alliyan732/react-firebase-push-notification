// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'api-key',
  authDomain: 'project-id.firebaseapp.com',
  databaseURL: 'https://project-id.firebaseio.com',
  projectId: 'project-id',
  storageBucket: 'project-id.appspot.com',
  messagingSenderId: 'sender-id',
  appId: 'app-id',
  measurementId: 'G-measurement-id',
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
