import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDKZssQXPe4U0xDi3sBYOpqkTNIjvpc6Qw",
  authDomain: "react-todo-app-962cf.firebaseapp.com",
  databaseURL: "https://react-todo-app-962cf.firebaseio.com",
  projectId: "react-todo-app-962cf",
  storageBucket: "react-todo-app-962cf.appspot.com",
  messagingSenderId: "911146202161",
  appId: "1:911146202161:web:d28af6134c0c4bdd075110",
  measurementId: "G-FZNPLQQB7P",
});

const db = firebaseApp.firestore();

export { db };
