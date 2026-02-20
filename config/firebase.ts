// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEu9VJ5Kz1EPzuS7a84zkp9Px7Jtx5T08",
  authDomain: "zardalapp.firebaseapp.com",
  projectId: "zardalapp",
  storageBucket: "zardalapp.firebasestorage.app",
  messagingSenderId: "211223110168",
  appId: "1:211223110168:web:d659d57163c04c31f8d96d",
  measurementId: "G-7LZC58JP1H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//auth
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
})


// db
export const firestore = getFirestore(app);