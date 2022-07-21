// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXVv9vXP4VbR2vSSzVoE9U4kHFVtQFei0",
  authDomain: "daveed--docs.firebaseapp.com",
  projectId: "daveed--docs",
  storageBucket: "daveed--docs.appspot.com",
  messagingSenderId: "699343562549",
  appId: "1:699343562549:web:ed50ad844a673676e04e7c",
  measurementId: "G-9NHFGC8SEW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)
const analytics = getAnalytics(app);