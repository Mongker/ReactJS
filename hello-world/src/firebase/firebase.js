import firebase from "firebase";

const config = {
  apiKey: "AIzaSyC8dziYMKStKvgTIN7oM5uJbncVqh30Nfw",
  authDomain: "hello-world-f9375.firebaseapp.com",
  databaseURL: "https://hello-world-f9375.firebaseio.com",
  projectId: "hello-world-f9375",
  storageBucket: "hello-world-f9375.appspot.com",
  messagingSenderId: "646375080756",
  appId: "1:646375080756:web:5ec4a83e5e74c165c19b61",
  measurementId: "G-CV87T741ES"
};
firebase.initializeApp(config);

export default firebase;
// vì test thử database nên ta export database trong firebase
export const database = firebase.database();