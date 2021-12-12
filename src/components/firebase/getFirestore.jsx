import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBBdg_63n__aQk424fZsmf2jesjdCd8F0o",
  authDomain: "cervezafs-a3896.firebaseapp.com",
  projectId: "cervezafs-a3896",
  storageBucket: "cervezafs-a3896.appspot.com",
  messagingSenderId: "1051433139902",
  appId: "1:1051433139902:web:d9c00b9420f64eeeaaa8ef",
  // measurementId: "${config.measurementId}"
};


const app = firebase.initializeApp(firebaseConfig);

// agregando nuestra funciones 

export function getFirestore() {
  return firebase.firestore(app)
}