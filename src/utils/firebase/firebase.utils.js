import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDpzc0_m6keSG2qUUoFTY2vD09stKfxlBE",
  authDomain: "invoice-app-frontendmentor.firebaseapp.com",
  projectId: "invoice-app-frontendmentor",
  storageBucket: "invoice-app-frontendmentor.appspot.com",
  messagingSenderId: "979857591740",
  appId: "1:979857591740:web:61ed0163adf1b7f4a12fb9",
};

const app = initializeApp(firebaseConfig);
