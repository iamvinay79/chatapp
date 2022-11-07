    // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjD6yEEbnwys0BCM11j9W2s_O3Sm7Q8h8",
  authDomain: "mav-chatapp.firebaseapp.com",
  projectId: "mav-chatapp",
  storageBucket: "mav-chatapp.appspot.com",
  messagingSenderId: "73088600429",
  appId: "1:73088600429:web:a8a00e6c87e5da72ccf264"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);