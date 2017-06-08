import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Button } from 'components/elements'
import { Navbar } from 'components/groups'
import { connect } from 'react-redux'
import * as actions from 'actions'

class NavbarCtn extends Component {
  constructor(props) {
    super(props)
  }
  authButton() {
    if (this.props.authenticated) {
      return <button onClick={() => this.props.authenticate(false)}>Sign Out</button>
    }
    return <button onClick={() => this.props.authenticate(true)}>Sign In</button>
  }
  render() {
    return (
      <div id='navbar-ctn'>
        <Navbar />
        {this.authButton()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { authenticated: state.authenticated }
}

export default connect(mapStateToProps, actions)(NavbarCtn)
