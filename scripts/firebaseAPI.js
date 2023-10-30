//--------------------------------------
// Your web app's Firebase configuration
//--------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyC7LQ8wPLYdNUN08QZJYLxeu0vhLBHHmZ0",
    authDomain: "dtc-14-csource.firebaseapp.com",
    projectId: "dtc-14-csource",
    storageBucket: "dtc-14-csource.appspot.com",
    messagingSenderId: "549360741575",
    appId: "1:549360741575:web:fb32b034d24cf0731062e2"
  };
//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();