// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCy9P0xSHfyfF9NKcxExjgYmoDGSJN7vJM",
  authDomain: "bridge-7c3de.firebaseapp.com",
  projectId: "bridge-7c3de",
  storageBucket: "bridge-7c3de.appspot.com",
  messagingSenderId: "190600979550",
  appId: "1:190600979550:web:20a24ff86242f720a480cf"
};

// Initialize Firebase
export const BRIDGE_APP = initializeApp(firebaseConfig);
export const BRIDGE_AUTH = getAuth(BRIDGE_APP);