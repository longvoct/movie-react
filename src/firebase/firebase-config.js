// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5VeMZzOPYue-4kA4JfQmoSwy-wfu7sm4",
  authDomain: "learn-firebase-c10e9.firebaseapp.com",
  projectId: "learn-firebase-c10e9",
  storageBucket: "learn-firebase-c10e9.appspot.com",
  messagingSenderId: "973616575684",
  appId: "1:973616575684:web:086e67e60818d88ca40591",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Init services
export const db = getFirestore();
export const auth = getAuth(app);
