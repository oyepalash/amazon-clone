import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDgRWn9m106wHFpguWFbUjcjoUdcGPXYU0",
  authDomain: "clone-f9114.firebaseapp.com",
  projectId: "clone-f9114",
  storageBucket: "clone-f9114.appspot.com",
  messagingSenderId: "1006867441463",
  appId: "1:1006867441463:web:c356a2acb48a9fd5179cb2",
  measurementId: "G-QCYKHK5BNN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };