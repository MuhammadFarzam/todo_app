import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBrAhmHf62_aQrCQG7aqLSf2xUYTjSdne8",
  authDomain: "todo-app-proj.firebaseapp.com",
  databaseURL: "https://todo-app-proj.firebaseio.com",
  projectId: "todo-app-proj",
  storageBucket: "todo-app-proj.appspot.com",
  messagingSenderId: "706348180495",
  appId: "1:706348180495:web:0eea9765cb8e12da602f7a",
  measurementId: "G-DJDMZLZEYC",
});

const db = firebaseApp.firestore();

export { db as fdb };
