import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB9GRL-aHa8I-OACuEfs1sc1EV4qPT5zSA",
  authDomain: "mychat-app-50133.firebaseapp.com",
  databaseURL : "https://mychat-app-50133-default-rtdb.firebaseio.com",
  projectId: "mychat-app-50133",
  storageBucket: "mychat-app-50133.appspot.com",
  messagingSenderId: "116402439530",
  appId: "1:116402439530:web:b0b719fb7c9695a66ad113",
  measurementId: "G-XH1Xa3T1W32"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
