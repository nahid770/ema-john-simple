// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfYiUJBHS3VdoLsz6IB5_ds9zsS2KLHU0",
  authDomain: "ema-john-simple-main-b37b9.firebaseapp.com",
  projectId: "ema-john-simple-main-b37b9",
  storageBucket: "ema-john-simple-main-b37b9.appspot.com",
  messagingSenderId: "866802822491",
  appId: "1:866802822491:web:4f177f43954759267c3e7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;