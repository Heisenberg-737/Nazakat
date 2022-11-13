import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA_5zXITFTXcTyYEAXKJ3uOqlthhQzPZgM",
  authDomain: "nazakat-7eb6b.firebaseapp.com",
  projectId: "nazakat-7eb6b",
  storageBucket: "nazakat-7eb6b.appspot.com",
  messagingSenderId: "417548606947",
  appId: "1:417548606947:web:ce58d3ada82e51b9cb94d6",
  measurementId: "G-TMFBFHW0VS"
};

const fire = firebase.initializeApp(firebaseConfig)

export default fire;