// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSQ0BXZHQSr0AK8QDkdBABCvMZeHkxnRk",
  authDomain: "curso-e6a0b.firebaseapp.com",
  projectId: "curso-e6a0b",
  storageBucket: "curso-e6a0b.appspot.com",
  messagingSenderId: "121853422373",
  appId: "1:121853422373:web:e6120d4d29a244fb6388cc",
  measurementId: "G-MMY463TGMP"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };