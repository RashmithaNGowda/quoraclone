// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAa46cev8TxMC2i1z8WydjVqOQuc5CYuhI",
  authDomain: "quoraclone-44691.firebaseapp.com",
  projectId: "quoraclone-44691",
  storageBucket: "quoraclone-44691.appspot.com",
  messagingSenderId: "1047514659705",
  appId: "1:1047514659705:web:c52dac8fcf1a1a10608da8",
  measurementId: "G-5PKEY8KPKM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };