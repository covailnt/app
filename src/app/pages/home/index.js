import 'isomorphic-unfetch'

import firebase from '~/.config'
import { Heading } from '~/components/elements'
import { SignIn, UserMenu } from '~/components/partials'
import { connectRedux } from '~/store'
import { isPreloadingStore, userFetchRequested } from '~/store/actions'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

class Index extends Component {
  static getInitialProps({ req }) {
    // Get user from server/express session
    const user = req && req.session ? req.session.decodedToken : null
    return { user }
  }

  componentDidMount() {
    console.log('s user ====>', this.props)

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const userAuthData = {
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          uid: user.uid,
        }
        // this.props.store.dispatch(userFetchRequested(userAuthData))

        return user.getIdToken().then(token => {
          return fetch('/api/login', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            credentials: 'same-origin',
            body: JSON.stringify({ token }),
          })
        })
      } else {
        // this.props.store.dispatch(isPreloadingStore(false))
        fetch('/api/logout', {
          method: 'POST',
          credentials: 'same-origin',
        })
      }
    })
  }

  render() {
    const { user } = this.props
    return (
      <div>
        {user ? <UserMenu photo={user.picture} /> : <SignIn />}
        <Heading level={1}>You are Home</Heading>
      </div>
    )
  }
}

Index.propTypes = {
  history: PropTypes.object,
  user: PropTypes.object,
}

export default connectRedux()(Index)
