// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

// Your web app's Firebase configuration

let firebaseConfig = {
  apiKey: "AIzaSyAHlw6G5ZixbmgL84t0oqyqBvK8j32BuzQ",
  authDomain: "portfolio-1a6c3.firebaseapp.com",
  projectId: "portfolio-1a6c3",
  storageBucket: "portfolio-1a6c3.appspot.com",
  messagingSenderId: "615718028580",
  appId: "1:615718028580:web:ec625d7eae1b625a98dfb1",
  measurementId: "G-187LZ2FX9L",
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
