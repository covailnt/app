import 'core-js/fn/object/assign'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { Provider } from 'react-redux'
import appStore from 'reducers'
import firebase from './refire/firebase'
import { SET_CURRENT_USER } from 'actions/types'

window.React = React

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log('USER', user)
    const { displayName, email, photoURL, uid } = user

    appStore.dispatch({
      type: SET_CURRENT_USER,
      payload: { displayName, email, photoURL, uid },
    })

    // TODO: Users shouldn't be written everytime auth state changes and the user exist
    // It should only be written if it is the users first time signing in
    firebase.database().ref('users/' + user.uid).set({
      displayName,
      email,
      photoURL,
    })

  }
  else {
    appStore.dispatch({
      type: SET_CURRENT_USER,
      payload: null
    })
  }

  start()
})

const start = () =>{
  // Render the main component into the dom
  ReactDOM.render(
    <Provider store={appStore}>
      <App />
    </Provider>,
    document.getElementById('app')
  )
}
