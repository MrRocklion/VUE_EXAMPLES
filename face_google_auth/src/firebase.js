// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8ElVlXkavo-yyyGlr1TZgG9jTdz1Y-Cs",
  authDomain: "pruebas-vuejs-5da8b.firebaseapp.com",
  projectId: "pruebas-vuejs-5da8b",
  storageBucket: "pruebas-vuejs-5da8b.appspot.com",
  messagingSenderId: "180882350679",
  appId: "1:180882350679:web:082a5be98357649d5e3912"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const storage = firebase.storage();
export{app,db,auth,storage}
