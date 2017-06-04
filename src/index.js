import 'core-js/fn/object/assign'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { Provider } from 'react-redux'
import appStore from 'stores/app'
import firebase from './refire/firebase'
import './theme/theme.scss'

window.React = React;

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    appStore.dispatch({
      type: 'SET_CURRENT_USER',
      value: user
    })

    firebase.database().ref('users/' + user.uid).set({
      displayName: user.displayName
    })
  }
  start()
});


const start = ()=>{
  // Render the main component into the dom
  ReactDOM.render( <Provider store={appStore}><App /></Provider>, document.getElementById('app'));
}
