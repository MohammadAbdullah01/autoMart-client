// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAdPsM1HRDShZ22KgTwcgNfV-rYMJ_GOig",
    authDomain: "auto-mart-3581f.firebaseapp.com",
    projectId: "auto-mart-3581f",
    storageBucket: "auto-mart-3581f.appspot.com",
    messagingSenderId: "536684297860",
    appId: "1:536684297860:web:776d7d3e762ce579c8ccd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;