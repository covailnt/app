import 'core-js/fn/object/assign'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { Provider } from 'react-redux'
import appStore from 'reducers'
import firebase from './refire/firebase'
import { SET_CURRENT_USER, CHANGE_AUTH } from 'actions/types'
import './theme/theme.scss';

window.React = React;

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log('USER', user)
    appStore.dispatch({
      type: SET_CURRENT_USER,
      payload: user
    })
    appStore.dispatch({
      type: CHANGE_AUTH,
      payload: true
    })

    firebase.database().ref('users/' + user.uid).set({
      displayName: user.displayName
    })
  } else {
    appStore.dispatch({
      type: SET_CURRENT_USER,
      payload: null
    })
    appStore.dispatch({
      type: CHANGE_AUTH,
      payload: false
    })
  }
  start()
});


const start = () =>{
  // Render the main component into the dom
  ReactDOM.render(
    <Provider store={appStore}>
      <App />
    </Provider>,
    document.getElementById('app')
  )
}
