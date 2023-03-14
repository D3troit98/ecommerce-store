// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAC7B0MxHwcozjUiJXdeKn399XkA9ALTmM",
  authDomain: "detroit-store.firebaseapp.com",
  projectId: "detroit-store",
  storageBucket: "detroit-store.appspot.com",
  messagingSenderId: "259392576520",
  appId: "1:259392576520:web:eb3b6259510be89d5d05bd",
  measurementId: "G-S1WD2BX2E8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    toast.error(err.message, {
      position: toast.POSITION.TOP_CENTER,
    });
  }
};

const logInWithEmailAndPassword = async (email, password) => {
  console.log("email, password", email, password);
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    toast.error(err.message, {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  console.log("name, email, password ", name, email, password);
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    toast.error(err.message, {
      position: toast.POSITION.TOP_CENTER,
    });
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password rest link sent!");
  } catch (err) {
    console.error(err);
    toast.error(err.message, {
      position: toast.POSITION.TOP_CENTER,
    });
  }
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};
