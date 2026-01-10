// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIXwcWnsO6Qd3oBaJYTQQ4OEQUPLG7w9U",
  authDomain: "portfoliodb-a3a05.firebaseapp.com",
  projectId: "portfoliodb-a3a05",
  storageBucket: "portfoliodb-a3a05.firebasestorage.app",
  messagingSenderId: "96228907044",
  appId: "1:96228907044:web:37fbc1d01fd12155f2e0b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

export default app;