import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAsmEvC6Cu7zAKNJC9-sENKbmrUtla1ccg",
  authDomain: "socialchat-34ea9.firebaseapp.com",
  projectId: "socialchat-34ea9",
  storageBucket: "socialchat-34ea9.appspot.com",
  messagingSenderId: "454414999802",
  appId: "1:454414999802:web:1775a9341d03e961196943",
  measurementId: "G-N7GLT9VFR4",
};

//   connect to the firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
//   connect to database
const db = firebaseApp.firestore();
// authentication stuff
const auth = firebase.auth();
// for google authentication
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
