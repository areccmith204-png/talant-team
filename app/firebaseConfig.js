// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFkInTgrZW1eswniPpXG3XsG_gWVJOuYQ",
  authDomain: "talant-team.firebaseapp.com",
  projectId: "talant-team",
  storageBucket: "talant-team.firebasestorage.app",
  messagingSenderId: "359675211022",
  appId: "1:359675211022:web:5e77a8405af95ae7843b5f",
  measurementId: "G-W8RREZNSL4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
