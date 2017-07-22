import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import watch from 'redux-watch'
import appStore from 'reducers'
import {
  IS_FETCHING_USER,
  SET_CURRENT_USER,
  USER_FETCH_REQUESTED,
} from 'actions/types'
import App from 'components/App'
import firebase from 'refire/firebase'

window.React = React

const renderApp = () => (
  <Provider store={appStore}>
    <App />
  </Provider>
)

const root = document.getElementById('app')

const w = watch(appStore.getState, 'fetching.fetchingUser')

appStore.subscribe(w((newVal) => {
  if (!newVal) {
    console.log('done fetching time to render!')
    ReactDOM.render(renderApp(), root)
  }
}))

firebase.auth().onAuthStateChanged((user) => {
  console.log('auth state change')

  if (user) {
    console.log('USER', user)

    const {
      displayName,
      email,
      photoURL,
      uid,
    } = user

    appStore.dispatch({
      type: USER_FETCH_REQUESTED,
      payload: { uid },
    })

    appStore.dispatch({
      type: SET_CURRENT_USER,
      user: {
        displayName,
        email,
        photoURL,
        uid,
      },
    })
  } else {
    appStore.dispatch({
      type: SET_CURRENT_USER,
      user: null,
    })
    appStore.dispatch({
      type: IS_FETCHING_USER,
      user: false,
    })
  }
})
