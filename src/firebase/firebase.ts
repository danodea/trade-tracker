// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdg-Vqz5tZGtwwpCTOfvYnb4MWaNmcXxo",
  authDomain: "trade-tracker-bb06f.firebaseapp.com",
  projectId: "trade-tracker-bb06f",
  storageBucket: "trade-tracker-bb06f.appspot.com",
  messagingSenderId: "261765707345",
  appId: "1:261765707345:web:1c47eddf6f700d59e26a70",
  databaseURL: "https://trade-tracker-bb06f-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase(app);
export default app;
