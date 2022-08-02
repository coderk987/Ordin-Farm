import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD7YcmHm-aSW7gmAupcjxsZAJFLO-ZtD7Y",
  authDomain: "ordinfarm.firebaseapp.com",
  projectId: "ordinfarm",
  storageBucket: "ordinfarm.appspot.com",
  messagingSenderId: "42748765955",
  appId: "1:42748765955:web:75d29f5d2d000917972b36",
  measurementId: "G-D406XEZRR8",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
