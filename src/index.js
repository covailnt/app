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
  console.log('auth state change')

  if (user) {
    console.log('USER', user)

    const {
      displayName,
      email,
      photoURL,
      uid,
    } = user

    // let bannerURL = null
    const path = `users/${uid}`

    //     firebase.database().ref(path).on('value', (snapshot) => {

    //       if (snapshot.child('bannerURL').exists()) {
    //         bannerURL = snapshot.val().bannerURL
    // console.log('about to dispatch banner')
    //         appStore.dispatch({
    //           type: SET_PROFILE_BANNER,
    //           bannerURL,
    //         })
    //       }
    //     })

    console.log('starting snapshot')

    firebase.database().ref(path).once('value').then((snapshot) => {
      // const bannerURLExists = snapshot.child('bannerURL').exists()
      console.log('have snapshot')
      // bannerURL = bannerURLExists ? snapshot.val().bannerURL : null

      // TODO: Users shouldn't be written everytime auth state changes and the user exist
      // It should only be written if it is the users first time signing in
      // if (bannerURL) {

        appStore.dispatch({
          type: SET_CURRENT_USER,
          user: {
            // bannerURL,
            displayName,
            email,
            photoURL,
            uid,
          },
        })

        // firebase.database().ref(path).update({
        // bannerURL,
        //   displayName,
        //   email,
        //   photoURL,
        // })
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
      user: null,
    })
  }

    console.log('rendering!')
  ReactDOM.render(renderApp(), root)
})
