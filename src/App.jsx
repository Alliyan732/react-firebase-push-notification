import { generateToken, messaging, onMessage } from "./firebase.config";
import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [payload, setPayload] = useState({});
  useEffect(() => {
    generateToken();
    onMessage(messaging, (payload) => {
      console.log("Message received. ", payload);
      setPayload(payload);
    });
  }, []);

  return (
    <div className="app-container">
      <h1 className="app-title">PUSH NOTIFICATION</h1>
      <div className="notification-container">
        {payload.data ? (
          <>
            <p className="notification-title">{payload.notification?.title}</p>
            <p className="notification-body">{payload.notification?.body}</p>
          </>
        ) : (
          <p className="notification-body">Witing for the notification ...</p>
        )}
      </div>
    </div>
  );
};

export default App;
