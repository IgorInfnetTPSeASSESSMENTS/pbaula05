// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_GEFijKQbll66LmZxcOdB82LbW7nGzak",
  authDomain: "react-c17d5.firebaseapp.com",
  projectId: "react-c17d5",
  storageBucket: "react-c17d5.appspot.com",
  messagingSenderId: "615538493610",
  appId: "1:615538493610:web:32b3a9db06d6f9119f28d3"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
export const db = getFirestore(app);