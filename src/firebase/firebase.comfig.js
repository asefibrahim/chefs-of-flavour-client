// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZXnCicoWrEyrEkCSISGhrdUXwOjA7GZ0",
    authDomain: "chiefs-of-flavour.firebaseapp.com",
    projectId: "chiefs-of-flavour",
    storageBucket: "chiefs-of-flavour.appspot.com",
    messagingSenderId: "753586073593",
    appId: "1:753586073593:web:098571f450fd1132e21728"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app