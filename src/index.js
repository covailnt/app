import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-firebase'
import { initializeApp } from 'firebase'
import config from './config'

window.React = React;
// FIREBASE SETUP
import firebase from 'firebase';
window.firebase = firebase;


const firebaseApp = initializeApp({
  apiKey: config.firebase.apiKey,
  authDomain: config.firebase.authDomain,
  databaseURL: config.firebase.databaseURL,
  projectId: config.firebase.projectId,
  storageBucket: config.firebase.storageBucket,
  messagingSenderId: config.firebase.messagingSenderId
})

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
  } else {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    firebase.auth().signInWithRedirect(provider)
  }
});


// Render the main component into the dom
ReactDOM.render( <Provider firebaseApp={firebaseApp}><App /></Provider>, document.getElementById('app'));
