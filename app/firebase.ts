import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCwZ0sXVPUpEYSjy-u3n4yjkas_sEw5kSU",
  authDomain: "carspa-807e8.firebaseapp.com",
  projectId: "carspa-807e8",
  storageBucket: "carspa-807e8.firebasestorage.app",
  messagingSenderId: "579851772584",
  appId: "1:579851772584:web:5f5bdc32ad1fe3de8fd89d",
  measurementId: "G-TYSHVTB08Y"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();