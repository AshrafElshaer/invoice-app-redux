import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpzc0_m6keSG2qUUoFTY2vD09stKfxlBE",
  authDomain: "invoice-app-frontendmentor.firebaseapp.com",
  projectId: "invoice-app-frontendmentor",
  storageBucket: "invoice-app-frontendmentor.appspot.com",
  messagingSenderId: "979857591740",
  appId: "1:979857591740:web:61ed0163adf1b7f4a12fb9",
};
//AUTHANTICATION FUNCTIONS

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

const addUserToDb = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.user.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email, photoURL, uid } = userAuth.user;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        userInfo: {
          uid,
          displayName,
          email,
          photoURL,
          createdAt,
        },
        Invoices: [],
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
};

export const createNewUser = async (email, password) => {
  const userAuth = await createUserWithEmailAndPassword(auth, email, password);
  await addUserToDb(userAuth);

  return userAuth.user;
};
export const loginWithEmail = async (email, password) => {
  const userAuth = await signInWithEmailAndPassword(auth, email, password);
  return userAuth.user;
};

export const signInWithGooglePopup = async () => {
  const userAuth = await signInWithPopup(auth, googleProvider);
  await addUserToDb(userAuth);
  return userAuth.user;
};

export const signOutUser = () => signOut(auth);

export const onAuthChange = (callback) => onAuthStateChanged(auth, callback);

//DATABASE FUNCTIONS

export const fetchInvoicesFromDb = async (uid) => {
  const userDocRef = doc(db, "users", uid);
  const docSnapshot = await getDoc(userDocRef);
  return docSnapshot.data().Invoices;
};

export const createNewInvoice = async (invoiceToAdd , userId) => {
  
    const userDocRef = doc(db, "users", userId);
    return await updateDoc(userDocRef, { 'Invoices':arrayUnion(invoiceToAdd) })

};

export const deleteInvoiceFromDb = async(invoiceToDelete , userId)=>{
  const userDocRef = doc(db, "users", userId);
  return await updateDoc(userDocRef, { 'Invoices':arrayRemove(invoiceToDelete) }).then(console.log('deleted'))
}
