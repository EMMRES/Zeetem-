// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_nAI-l8gGN_L8qPBKBz4HU8Jvu7VQBNI",
  authDomain: "zeetem-493d1.firebaseapp.com",
  projectId: "zeetem-493d1",
  storageBucket: "zeetem-493d1.firebasestorage.app",
  messagingSenderId: "490742002717",
  appId: "1:490742002717:web:9b8a1b621b7d6ba9a142f4",
  measurementId: "G-VCHNR88R07"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
