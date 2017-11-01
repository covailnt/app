import 'react-hot-loader/patch'

import { isPreloadingStore, userFetchRequested } from 'actions'
import App from 'components/App'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import appStore from 'reducers'
import watch from 'redux-watch'

import firebase from '.config'

const renderApp = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app'),
  )
}

const w = watch(appStore.getState, 'preloadingStore')

export const unsubscribePreload = appStore.subscribe(
  w(newVal => {
    if (!newVal) {
      console.log('done preloading time to render!')

      renderApp(App)

      if (module.hot) {
        module.hot.accept('components/App', () => {
          renderApp(App)
        })
      }
    }
  }),
)

export const unsubscribeAuth = firebase.auth().onAuthStateChanged(user => {
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
