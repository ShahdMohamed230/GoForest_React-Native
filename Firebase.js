
// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDhzubvKk1zpOrYPheokL6C3Eu5vIzU6j8",
    authDomain: "go-forest-eeeeb.firebaseapp.com",
    projectId: "go-forest-eeeeb",
    storageBucket: "go-forest-eeeeb.appspot.com",
    messagingSenderId: "34576906723",
    appId: "1:34576906723:web:373418ab84e1f8487908d6",
    measurementId: "G-PG5CTY5TY4"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };