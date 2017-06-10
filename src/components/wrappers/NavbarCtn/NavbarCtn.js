import React, { Component } from 'react'
import { Navbar } from 'components/groups'
import { connect } from 'react-redux'
import * as actions from 'actions'
import firebase from 'refire/firebase'

class NavbarCtn extends Component {
  constructor(props) {
    super(props)
  }
  authenticate() {
    // this.props.authenticate(true)
    const provider = new firebase.auth.GoogleAuthProvider()

    firebase.auth().signInWithPopup(provider)
      .then(function(result) {
        const user = {
          token: result.credential.accessToken,
          name: result.user.displayName,
          email: result.user.email,
          uid: result.user.uid,
        }
        // console.log(user)
      })
      .catch(function(err) {
        console.log('error', err)
      })
  }
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
    if (this.props.authenticated) {
      return <button onClick={() => this.props.authenticate(false)}>Sign Out</button>
    }
    return <button onClick={() => this.authenticate()}>Sign In</button>
  }
  render() {
    return (
      <div id='navbar-ctn'>
        <Navbar />
        {this.authButton()}
        <button onClick={() => this.signOut()}>Sign Out</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { authenticated: state.authenticated }
}

export default connect(mapStateToProps, actions)(NavbarCtn)
