import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMOAV6Y9hbr_xThGtMlWO2Ti8orW64s9k",
  authDomain: "clone-15485.firebaseapp.com",
  projectId: "clone-15485",
  storageBucket: "clone-15485.appspot.com",
  messagingSenderId: "275099122916",
  appId: "1:275099122916:web:3f3c8096ed3964580e40f1",
  measurementId: "G-NKSEQWDMS8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
