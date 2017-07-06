import 'react-hot-loader/patch'
import 'core-js/fn/object/assign'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import appStore from 'reducers'
import {
  SET_CURRENT_USER,
  SET_PROFILE_BANNER,
  SET_PROFILE_SPECIALTY,
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

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('USER', user)

    const {
      displayName,
      email,
      photoURL,
      uid,
    } = user

    let bannerURL = null
    let specialty = null
    const path = `users/${uid}`

    firebase.database().ref(path).on('value', (snapshot) => {

      if (snapshot.child('bannerURL').exists()) {
        bannerURL = snapshot.val().bannerURL

        appStore.dispatch({
          type: SET_PROFILE_BANNER,
          bannerURL,
        })
      }

      if (snapshot.child('specialty').exists()) {
        specialty = snapshot.val().specialty

        appStore.dispatch({
          type: SET_PROFILE_SPECIALTY,
          specialty,
        })
      }
    })

    firebase.database().ref(path).once('value').then((snapshot) => {
      const bannerURLExists = snapshot.child('bannerURL').exists()
      const specialtyExists = snapshot.child('specialty').exists()

      bannerURL = bannerURLExists ? snapshot.val().bannerURL : null
      specialty = specialtyExists ? snapshot.val().specialty : null

      // TODO: Users shouldn't be written everytime auth state changes and the user exist
      // It should only be written if it is the users first time signing in
      // if (bannerURL) {
        appStore.dispatch({
          type: SET_CURRENT_USER,
          payload: {
            bannerURL,
            displayName,
            email,
            photoURL,
            specialty,
            uid,
          },
        })

        firebase.database().ref(path).update({
          bannerURL,
          displayName,
          email,
          photoURL,
        })
      // } else {
      //   firebase.database().ref(path).update({
      //     displayName,
      //     email,
      //     photoURL,
      //   })
      // }
    })
  } else {
    appStore.dispatch({
      type: SET_CURRENT_USER,
      payload: null,
    })
  }

  ReactDOM.render(renderApp(), root)
})
