// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCC_HrrqZcLRbLGPlOyRhFpYTXrQL3fs_8",
    authDomain: "doctors-portal-f8b5d.firebaseapp.com",
    projectId: "doctors-portal-f8b5d",
    storageBucket: "doctors-portal-f8b5d.appspot.com",
    messagingSenderId: "379904727857",
    appId: "1:379904727857:web:f1f7d06de775fb57512e10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;