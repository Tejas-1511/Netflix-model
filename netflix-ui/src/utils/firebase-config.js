// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA37wmXo1myT5K1R4tYsW7Dj82UnzGY1II",
  authDomain: "react-netflix-clone-983ea.firebaseapp.com",
  projectId: "react-netflix-clone-983ea",
  storageBucket: "react-netflix-clone-983ea.appspot.com",
  messagingSenderId: "841194146200",
  appId: "1:841194146200:web:d25b5d1974dc2d67a283ed",
  measurementId: "G-3RCTBCSHMJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app);