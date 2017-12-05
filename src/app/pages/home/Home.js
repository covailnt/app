import { Heading } from '~/components/elements'
import { SignIn, UserMenu } from '~/components/partials'
import { connectRedux } from '~/store'
import { getUserData } from '~/utils'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

class Index extends Component {
  static async getInitialProps({ req, store }) {
    const userSessionData = req && req.session ? req.session.decodedToken : null
    let userData = null

    if (userSessionData) {
      userData = await getUserData(req.firebaseServer, userSessionData, store)
    }

    return { user: userData }
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
