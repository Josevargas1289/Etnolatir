
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyC9xAT6s-yU4m0hq1xc5-HHQxcyaC6YBkE",
  authDomain: "etno-latir.firebaseapp.com",
  projectId: "etno-latir",
  storageBucket: "etno-latir.appspot.com",
  messagingSenderId: "482117251368",
  appId: "1:482117251368:web:f38703f233fdca545f601d"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
