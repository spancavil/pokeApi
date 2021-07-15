import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp( {
    apiKey: "AIzaSyDAEnupmd-uONARo9EF7MP9aMa-I6AENCg",
    authDomain: "pokeapi-shop.firebaseapp.com",
    projectId: "pokeapi-shop",
    storageBucket: "pokeapi-shop.appspot.com",
    messagingSenderId: "153885200537",
    appId: "1:153885200537:web:5d674ec7085be8fb102808"
  });

  export function getFirebase(){
      return app;
  }

  export function getFirestore(){
      return firebase.firestore(app);
  }

