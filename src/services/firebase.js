import firebase from "firebase/app";
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCYWFwvtepLv-GTbtcDhCaHwzjo5pS8CzM",
    authDomain: "react-barcelona.firebaseapp.com",
    projectId: "react-barcelona",
    storageBucket: "react-barcelona.appspot.com",
    messagingSenderId: "18604515533",
    appId: "1:18604515533:web:1b60713cdd48acedad4984"
  };

firebase.initializeApp(firebaseConfig)

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

function login() {
    return auth.signInWithPopup(provider)
}

function logout() {
    return auth.signOut();
}
  //To Do: export functionality

  export {
      login,
      logout,
      auth
  }
