import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD6iwfe_tdTy4dHeI9jqw81LAWQ-H2s1sU",
  authDomain: "davut-a0fa2.firebaseapp.com",
  projectId: "davut-a0fa2",
  storageBucket: "davut-a0fa2.appspot.com",
  messagingSenderId: "91413918002",
  appId: "1:91413918002:web:1354b32c15e94f7770a72b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage();
export { app, db, auth, storage };
