import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDFA_vtWfsJLm0RF7vdewjIRXdBaRlURkY",
  authDomain: "fir-crud-6e5e6.firebaseapp.com",
  projectId: "fir-crud-6e5e6",
  storageBucket: "fir-crud-6e5e6.appspot.com",
  messagingSenderId: "470953711903",
  appId: "1:470953711903:web:976ea7cdfc65b1adb0f82a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)