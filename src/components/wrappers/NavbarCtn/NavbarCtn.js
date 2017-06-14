import React, { Component } from 'react'
import { Navbar } from 'components/groups'
import { connect } from 'react-redux'
import * as actions from 'actions'
import firebase from 'refire/firebase'

class NavbarCtn extends Component {
  signOut() {
    firebase.auth().signOut().then(function() {
    // Sign-out successful.
      console.log('signed-out successfully')
    }).catch(function(err) {
    // An error happened.
      console.log('sign-out error', err)
    });
  }
  authButton() {
    if (this.props.user) {
      return <button onClick={() => this.signOut()}>Sign Out</button>
    }
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
  return { user: state.user }
}

export default connect(mapStateToProps, actions)(NavbarCtn)
