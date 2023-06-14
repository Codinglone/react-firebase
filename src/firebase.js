// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLs-xqlTAIErtpZZpAd8rHkI-KLTM0FTg",
  authDomain: "learn-firebase-auth-c9855.firebaseapp.com",
  projectId: "learn-firebase-auth-c9855",
  storageBucket: "learn-firebase-auth-c9855.appspot.com",
  messagingSenderId: "381570978342",
  appId: "1:381570978342:web:b1fd40c03c71cfea010ce7",
  measurementId: "G-9J6DJV936D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);

export default app;