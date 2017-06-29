import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Heading } from 'components/elements'
import { SignIn, UserMenu } from 'components/wrappers'
import { connect } from 'react-redux'

class Home extends Component {
  constructor(props) {
    super(props)
  }
  componentDidUpdate(prevProps, prevState) {
    const { user, history } = this.props

    if (user && !prevProps.user && history.location.pathname === '/') {
      this.props.history.push('/profile')
    }
  }
  render() {
    const { user } = this.props
    return (
      <div id='home-ctn'>
        <div className='menu-ctn'>
          {user ? <UserMenu /> : <SignIn />}
        </div>
        <Heading level={1}>You are Home</Heading>
        <div id="firebaseui-auth-container"></div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { user: state.user }
}

export default withRouter(connect(mapStateToProps)(Home))
