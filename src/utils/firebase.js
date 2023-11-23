// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBkGjPO4XeMeE7qZCLRh2ZghRWhJ258aY",
  authDomain: "netflixgpt4040.firebaseapp.com",
  projectId: "netflixgpt4040",
  storageBucket: "netflixgpt4040.appspot.com",
  messagingSenderId: "561061043065",
  appId: "1:561061043065:web:b3d98d2c34d434d7562da8",
  measurementId: "G-BEQNYXKFR1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);