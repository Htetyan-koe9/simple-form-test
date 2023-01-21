import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyNhTN-Vwp_xAZuQp-ixRb3ce8_4jw8F4",
  authDomain: "simple-form-test.firebaseapp.com",
  projectId: "simple-form-test",
  storageBucket: "simple-form-test.appspot.com",
  messagingSenderId: "914811359441",
  appId: "1:914811359441:web:b1070771dadd545261f5f0",
  measurementId: "G-JHJS283D73",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();

export { projectFirestore };
