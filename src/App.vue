<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import Firebase from 'firebase'
export default {
  name: 'App'
}

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
// eslint-disable-next-line
let jungsRef = db.ref('jungs')
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
