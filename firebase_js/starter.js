// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0UyuacvbSYQmYFMcasvhz_2CYDzvXGt8",
  authDomain: "gearquest-99781.firebaseapp.com",
  projectId: "gearquest-99781",
  storageBucket: "gearquest-99781.firebasestorage.app",
  messagingSenderId: "277657155200",
  appId: "1:277657155200:web:233a25497feaf425a7d865",
  measurementId: "G-6DPT370PZH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);