// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJrvrgYT8yUk1uMdnWk4U8aycPGdYCEoY",
  authDomain: "chatapp-575d4.firebaseapp.com",
  projectId: "chatapp-575d4",
  storageBucket: "chatapp-575d4.appspot.com",
  messagingSenderId: "266281098314",
  appId: "1:266281098314:web:8b40713b9fa46e211f9ab3",
  measurementId: "G-MT35NVQ7RQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
