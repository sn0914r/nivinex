import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBuoPfDZBa4AYonxYpbE_ZLKLYjHJcPk4M",
  authDomain: "blogapplication-b1b6d.firebaseapp.com",
  databaseURL: "https://blogapplication-b1b6d-default-rtdb.firebaseio.com",
  projectId: "blogapplication-b1b6d",
  storageBucket: "blogapplication-b1b6d.firebasestorage.app",
  messagingSenderId: "397179731661",
  appId: "1:397179731661:web:3c2182668b15e7d7b63384"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);