// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-JQioXP-UNCQjm3QKSXs_Lse5aBRzC_g",
  authDomain: "mern-storage-v1.firebaseapp.com",
  projectId: "mern-storage-v1",
  storageBucket: "mern-storage-v1.appspot.com",
  messagingSenderId: "412699576021",
  appId: "1:412699576021:web:861698a4ecc023a94e445c",
  measurementId: "G-95XC7E7ZH0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);