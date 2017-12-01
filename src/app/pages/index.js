import firebase from '~/.config'
import { Heading } from '~/components/elements'
import { SignIn, UserMenu } from '~/components/partials'
import { connectRedux } from '~/store'
import { isPreloadingStore, userFetchRequested } from '~/store/actions'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

class Index extends Component {
  static async getInitialProps({ store }) {
    console.log('getting initial props')

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

  render() {
    const { user } = this.props
    return (
      <main>
        {user ? <UserMenu /> : <SignIn />}
        <Heading level={1}>You are Home</Heading>
      </main>
    )
  }
}

Index.propTypes = {
  history: PropTypes.object,
  user: PropTypes.object,
}

const mapStateToProps = state => {
  return { user: state.user }
}

export default connectRedux(mapStateToProps)(Index)
