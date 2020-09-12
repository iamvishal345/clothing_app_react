import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAPGaswlg1ZOTj1gL8ThxzXq-h5obdtQ0w",
  authDomain: "clothingapp345.firebaseapp.com",
  databaseURL: "https://clothingapp345.firebaseio.com",
  projectId: "clothingapp345",
  storageBucket: "clothingapp345.appspot.com",
  messagingSenderId: "1080954644028",
  appId: "1:1080954644028:web:43889d4f74b3d232aac539",
  measurementId: "G-VVWQGH64J6",
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
