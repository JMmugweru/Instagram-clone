import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDpRvu5JhEqYzD-irPL9eVr1gcOilaE_g4",
    authDomain: "instagram-clone-382ea.firebaseapp.com",
    projectId: "instagram-clone-382ea",
    storageBucket: "instagram-clone-382ea.appspot.com",
    messagingSenderId: "437026784494",
    appId: "1:437026784494:web:74f705732bd618b9b19fff"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };