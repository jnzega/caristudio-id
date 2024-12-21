// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFD8awvHb8cbC09mvz5bmQ-2zWHmIw4ZA",
  authDomain: "caristudio-id.firebaseapp.com",
  databaseURL: "https://caristudio-id-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "caristudio-id",
  storageBucket: "caristudio-id.firebasestorage.app",
  messagingSenderId: "94694572787",
  appId: "1:94694572787:web:794d31f31cb453d5c5ad86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Authentication and Database
export const auth = getAuth(app);
export const database = getDatabase(app);