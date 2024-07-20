// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1sr7zJGn-AcLJqNtW8PvjmdQfCpz0Q00",
  authDomain: "netflix-gpt-ea057.firebaseapp.com",
  projectId: "netflix-gpt-ea057",
  storageBucket: "netflix-gpt-ea057.appspot.com",
  messagingSenderId: "561705122754",
  appId: "1:561705122754:web:5f60b1310e30a063ea745b",
  measurementId: "G-YMN9M87Y33",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
