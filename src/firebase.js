import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAZJBGYrPixV0vC1WEiYrWg53tIbrRUjYY",
    authDomain: "challenge-1eb5b.firebaseapp.com",
    databaseURL: "https://challenge-1eb5b.firebaseio.com",
    projectId: "challenge-1eb5b",
    storageBucket: "challenge-1eb5b.appspot.com",
    messagingSenderId: "102374226986",
    appId: "1:102374226986:web:49935cefbda0aff16c9753"
  };

  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };