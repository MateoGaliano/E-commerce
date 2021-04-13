import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDZSm27rxwvZGQfb72fP6sXG45UptYh3sg",
    authDomain: "mateo-galiano.firebaseapp.com",
    projectId: "mateo-galiano",
    storageBucket: "mateo-galiano.appspot.com",
    messagingSenderId: "404633235447",
    appId: "1:404633235447:web:efc286c0404fe6b53d88f2"
  });


      export function getFirebase() {
          return app;
      }

      export function getFirestore() {
          return firebase.firestore(app);
      }