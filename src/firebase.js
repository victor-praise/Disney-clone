import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAQg4OYJdKdgKWxQ-be6kqy_MWI7OlYYKw",
    authDomain: "disney-plus-clone-c1535.firebaseapp.com",
    projectId: "disney-plus-clone-c1535",
    storageBucket: "disney-plus-clone-c1535.appspot.com",
    messagingSenderId: "22518716332",
    appId: "1:22518716332:web:b569f7fa99accf0095cc09",
    measurementId: "G-N83X5RZSX3"
  };
  
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  
  export { auth, provider, storage };
  export default db;