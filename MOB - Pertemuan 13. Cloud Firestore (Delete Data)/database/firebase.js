import firebase from 'firebase'

import 'firebase/firestore'
import 'firebase/database'
//const
var firebaseConfig = {
    apiKey: "AIzaSyAyUzr7O83baxsLUaO-1CidA9DetW5c0Pc",
    authDomain: "expofirebase-a76f9.firebaseapp.com",
    projectId: "expofirebase-a76f9",
    storageBucket: "expofirebase-a76f9.appspot.com",
    messagingSenderId: "197038405421",
    appId: "1:197038405421:web:0b1a92ea5ceb38687745a4",
    measurementId: "G-LRK5SNK723"
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore()
  const bd = firebase.database()

  //firebaseConfig
  export default {
      firebase, 
      db,
      bd
  }