import firebase from 'firebase'
// Initialize Firebase
let config = {
  apiKey: 'AIzaSyCqxeB7SI7rIe5mI3LY0Rpi4qnvJyqt13w',
  authDomain: 'knobelapp.firebaseapp.com',
  databaseURL: 'https://knobelapp.firebaseio.com',
  projectId: 'knobelapp',
  storageBucket: 'knobelapp.appspot.com',
  messagingSenderId: '242600715534'
}
firebase.initializeApp(config)
// save a reference to the firestore database
// to access it in the future
// eslint-disable-next-line
export default { 
  db: firebase.firestore()
}
