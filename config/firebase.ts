// // Import the functions you need from the SDKs you need

// import firestore from '@react-native-firebase/firestore';
// import { getAnalytics } from "firebase/analytics";
// import { initializeApp } from "firebase/app";

// import { getAuth } from 'firebase/auth';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCPf6dqDxKdpZyNjRdudxpAGdhG_8daM8E",
//   authDomain: "zardalapp-e5693.firebaseapp.com",
//   projectId: "zardalapp-e5693",
//   storageBucket: "zardalapp-e5693.firebasestorage.app",
//   messagingSenderId: "122536963307",
//   appId: "1:122536963307:web:7e063c7765e9229a3de2ae",
//   measurementId: "G-ENYF306FBE"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export const auth = getAuth(app);

// export { firestore };


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPf6dqDxKdpZyNjRdudxpAGdhG_8daM8E",
  authDomain: "zardalapp-e5693.firebaseapp.com",
  projectId: "zardalapp-e5693",
  storageBucket: "zardalapp-e5693.firebasestorage.app",
  messagingSenderId: "122536963307",
  appId: "1:122536963307:web:7e063c7765e9229a3de2ae",
  measurementId: "G-ENYF306FBE"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);


