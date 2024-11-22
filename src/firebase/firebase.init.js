// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmDHJfBa33_5CtKwTJBD7a2-gna4_2nWc",
  authDomain: "vocabulary-learning-a9.firebaseapp.com",
  projectId: "vocabulary-learning-a9",
  storageBucket: "vocabulary-learning-a9.firebasestorage.app",
  messagingSenderId: "1092215035055",
  appId: "1:1092215035055:web:f3a7e3b7e1933f7cadf05a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;