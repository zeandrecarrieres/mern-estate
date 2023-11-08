// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-3fa53.firebaseapp.com",
  projectId: "mern-auth-3fa53",
  storageBucket: "mern-auth-3fa53.appspot.com",
  messagingSenderId: "386364014506",
  appId: "1:386364014506:web:fe05e09e294da5ccf035d3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

