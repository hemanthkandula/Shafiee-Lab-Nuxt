import VueFirestore from 'vue-firestore'

import Vue from 'vue'

import 'firebase/firestore'

import firebase from 'firebase'

Vue.use(VueFirestore)

const config = {
  apiKey: 'AIzaSyAvv7O7kyq6AmPPAHV-4xNA5lgE8eQW36k',
  authDomain: 'shafiee-laboratory-vue.firebaseapp.com',
  databaseURL: 'https://shafiee-laboratory-vue.firebaseio.com',
  projectId: 'shafiee-laboratory-vue',
  storageBucket: 'shafiee-laboratory-vue.appspot.com',
  messagingSenderId: '1037007490240'
}

const firebaseapp = firebase.initializeApp(config)

// export default firebaseapp

// export default db.firestore()
export default firebaseapp.firestore()
