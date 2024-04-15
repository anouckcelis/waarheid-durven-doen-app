// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwX6goRYt6xFYD04DahM5RRN7rSg12fnM",
  authDomain: "waarheid-durven-doen-itspot.firebaseapp.com",
  projectId: "waarheid-durven-doen-itspot",
  storageBucket: "waarheid-durven-doen-itspot.appspot.com",
  messagingSenderId: "959614437797",
  appId: "1:959614437797:web:159e13bf54fe1a2fdfc04c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };