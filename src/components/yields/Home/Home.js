import React, { Component } from 'react'
import { Heading } from 'components/elements'
import { SignIn, UserMenu } from 'components/groups'
import { connect } from 'react-redux'

class Home extends Component {
  constructor(props) {
    super(props)
  }
  renderMenu() {
    return this.props.user ? <UserMenu /> : <SignIn />
  }
  render() {
    return (
      <div>
        {this.renderMenu()}
        <Heading level={1}>You are Home</Heading>
        <div id="firebaseui-auth-container"></div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { user: state.user }
}

export default connect(mapStateToProps)(Home)
