import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'components/elements'
import { Navbar } from 'components/groups'
import { connect } from 'react-redux'
import * as actions from 'actions'
import firebase from 'refire/firebase'
import Modal from 'react-modal'

class NavbarCtn extends Component {
  constructor(props) {
    super(props)

    this.state = { logInModalIsOpen: false }
  }
  logIn() {
    console.log('signing in')
    this.openLogInModal()
  }
  logOut() {
    firebase.auth().signOut().then(function() {
    // Sign-out successful.
      console.log('signed-out successfully')
    }).catch(function(err) {
    // An error happened.
      console.log('sign-out error', err)
    });
  }
  openLogInModal() {
    this.setState({ logInModalIsOpen: true })
  }
  closeLogInModal() {
    this.setState({ logInModalIsOpen: false })
  }
  authButton() {
    return this.props.user
      ? <Button onClick={() => this.logOut()}>log Out</Button>
      : <Button onClick={() => this.logIn()}>Log In</Button>
  }
  render() {
    return (
      <div id='navbar-ctn'>
        <Navbar />
        {this.authButton()}
        <Link to='/signup'><Button>Sign Up</Button></Link>
        <Modal
          isOpen={this.state.logInModalIsOpen}
          onRequestClose={this.closeLogInModal}
          contentLabel="Example Modal"
        >

          <h2>Hello</h2>
          <Button onClick={() => this.closeLogInModal()}>close</Button>
          <div>I am a modal</div>
          <form>
            <input />
            <Button>tab navigation</Button>
            <Button>stays</Button>
            <Button>inside</Button>
            <Button>the modal</Button>
          </form>
        </Modal>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { user: state.user }
}

export default connect(mapStateToProps, actions)(NavbarCtn)
