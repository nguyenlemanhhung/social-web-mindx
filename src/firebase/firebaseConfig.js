// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB_9v1WsqFkGdu2Frd33n7LqHglAOw3fUU",
  authDomain: "social-web-3d398.firebaseapp.com",
  projectId: "social-web-3d398",
  storageBucket: "social-web-3d398.appspot.com",
  messagingSenderId: "378852541000",
  appId: "1:378852541000:web:3d6043faa72f9836058e7d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase();
export const fs = getFirestore();
export const storage = getStorage(app);
