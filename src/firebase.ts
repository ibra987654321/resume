// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB7VIL2DmR-KXU-EDi1FZRzKG78tQPclr0",
    authDomain: "mysite-79cac.firebaseapp.com",
    projectId: "mysite-79cac",
    storageBucket: "mysite-79cac.appspot.com",
    messagingSenderId: "489364563401",
    appId: "1:489364563401:web:e03fa545e9d14d47d8f418",
    measurementId: "G-FMXKXPYFZT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);