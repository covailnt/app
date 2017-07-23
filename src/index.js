import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import firebase from 'refire/firebase'
import appStore from 'reducers'
import watch from 'redux-watch'
import { isPreloadingStore, userFetchRequested } from 'actions'
import App from 'components/App'

window.React = React

const renderApp = () => (
  <Provider store={appStore}>
    <App />
  </Provider>
)

const root = document.getElementById('app')

const w = watch(appStore.getState, 'preloadingStore')

export const unsubscribePreload = appStore.subscribe(w((newVal) => {
  if (!newVal) {
    console.log('done preloading time to render!')
    ReactDOM.render(renderApp(), root)
  }
}))

export const unsubscribeAuth = firebase.auth().onAuthStateChanged((user) => {
  console.log('auth state change')

  if (user) {
    console.log('USER', user)

    const userAuthData = {
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      uid: user.uid,
    }

    appStore.dispatch(userFetchRequested(userAuthData))

  } else {
    appStore.dispatch(isPreloadingStore(false))
  }
})
