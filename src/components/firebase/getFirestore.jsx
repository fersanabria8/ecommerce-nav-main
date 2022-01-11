import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
  // apiKey: "AIzaSyBBdg_63n__aQk424fZsmf2jesjdCd8F0o",
  // authDomain: "cervezafs-a3896.firebaseapp.com",
  // projectId: "cervezafs-a3896",
  // storageBucket: "cervezafs-a3896.appspot.com",
  // messagingSenderId: "1051433139902",
  // appId: "1:1051433139902:web:d9c00b9420f64eeeaaa8ef",
  // // measurementId: "${config.measurementId}"
  // measurementId: "G-F26PHLNP93"
  /////////////////////////////////////////////////
  // apiKey: "AIzaSyBBdg_63n__aQk424fZsmf2jesjdCd8F0o",
  // authDomain: "cervezafs-a3896.firebaseapp.com",
  // projectId: "cervezafs-a3896",
  // storageBucket: "cervezafs-a3896.appspot.com",
  // messagingSenderId: "1051433139902",
  // appId: "1:1051433139902:web:d9c00b9420f64eeeaaa8ef",
  // measurementId: "G-F26PHLNP93"
  apiKey: "AIzaSyBjueGm7GXFESFTV7vU08nbw-XPauB3HS0",
  authDomain: "cerveza-fs.firebaseapp.com",
  projectId: "cerveza-fs",
  storageBucket: "cerveza-fs.appspot.com",
  messagingSenderId: "349425703508",
  appId: "1:349425703508:web:ebef394fd083bf90a9ebc1",
  measurementId: "G-9LFPZE0PCV"
};





///////////////////////////////////////////////////////////////
const app = firebase.initializeApp(firebaseConfig);

// agregando nuestra funciones 

function getFirestore() {
  return firebase.firestore(app)
}
export default getFirestore;







