import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB78SKpB9Jp7kwqVgOBj6rvu84osKdPVos",
  authDomain: "entrega-final-react-c9b33.firebaseapp.com",
  projectId: "entrega-final-react-c9b33",
  storageBucket: "entrega-final-react-c9b33.firebasestorage.app",
  messagingSenderId: "38666136319",
  appId: "1:38666136319:web:6dc70b1eec6e9279f8faca",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


