import * as firebase from 'firebase'

import React, { Component } from 'react'
import { isPreloadingStore, userFetchRequested } from '~/store/actions'

import Header from '~/components/Header'
import clientCredentials from '~/.config'
import { connectRedux } from '~/store'

class Index extends Component {
  static async getInitialProps({ store }) {
    console.log('getting initial props')

    if (!firebase.apps.length) {
      firebase.initializeApp(clientCredentials)
    }

    if (!store.getState().user) {
      console.log('no user get firebase auth')
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          const userAuthData = {
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            uid: user.uid,
          }
          console.log('user ====>', user)
          store.dispatch(userFetchRequested(userAuthData))
        } else {
          store.dispatch(isPreloadingStore(false))
        }
      })
    }
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <div>Hello</div>
  }
}

export default connectRedux(Index)
