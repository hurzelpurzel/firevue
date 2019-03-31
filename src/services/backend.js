import Firebase from 'firebase'

// Initialize Firebase
let config = {
  apiKey: 'AIzaSyCqxeB7SI7rIe5mI3LY0Rpi4qnvJyqt13w',
  authDomain: 'knobelapp.firebaseapp.com',
  databaseURL: 'https://knobelapp.firebaseio.com',
  projectId: 'knobelapp',
  storageBucket: 'knobelapp.appspot.com',
  messagingSenderId: '242600715534'
}

let app = Firebase.initializeApp(config)
let db = app.database()
export default {
  app: app,
  db: db
}
