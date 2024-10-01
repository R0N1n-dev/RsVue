import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0RUfdb2U8cwneZlH6quqqXTGhSSs8k6c",
  authDomain: "ronin-auth.firebaseapp.com",
  databaseURL: "https://ronin-auth-default-rtdb.firebaseio.com",
  projectId: "ronin-auth",
  storageBucket: "ronin-auth.appspot.com",
  messagingSenderId: "330500904760",
  appId: "1:330500904760:web:2d6f1c6e2c947bb9e9d3cd",
};

// initialize firebase app
initializeApp(firebaseConfig);

// initialize firebase auth
const auth = getAuth();

export { auth };
