import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCFE1ikxrI5L6WRxZMgkIhJgyHvxjQCe6Y",
    authDomain: "slack-bc32d.firebaseapp.com",
    projectId: "slack-bc32d",
    storageBucket: "slack-bc32d.appspot.com",
    messagingSenderId: "112252543",
    appId: "1:112252543:web:fa950a056f9949325ad14a"
  };

  const firebaseApp = firebase.initializeApp(firebase)
  const db = firebaseApp.firestore()

  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {auth, provider}
  export default db

  

