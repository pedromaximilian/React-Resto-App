import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCqOS9EIBleLgcnzzVgMnthOOB-z_F_h60",
    authDomain: "restos-46e54.firebaseapp.com",
    projectId: "restos-46e54",
    storageBucket: "restos-46e54.appspot.com",
    messagingSenderId: "1069298447972",
    appId: "1:1069298447972:web:01066522c148fc8ef81171"
  };

  // Initialize Firebase
  export const firebaseapp =firebase.initializeApp(firebaseConfig);
