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
  authButton() {
    return this.props.user
      ? <Button onClick={() => this.logOut()}>Log Out</Button>
      : <Button onClick={() => this.openLogInModal()}>Log In</Button>
  }
  logIn(socialProvider) {
    let provider

    switch(socialProvider) {
      case 'facebook':
        provider = new firebase.auth.FacebookAuthProvider()
        break
      case 'github':
        provider = new firebase.auth.GithubAuthProvider()
        break
      case 'google':
        provider = new firebase.auth.GoogleAuthProvider()
        break
    }

    firebase.auth().signInWithPopup(provider)
      .then(() => {
        console.log(`${socialProvider} signin successful`)
        this.props.history.push('/signup/create-account/step-1')
      })
      .catch(err => {
        console.log(`${socialProvider} auth error`, err)
        this.closeLogInModal()
      })
  }
  logInWithEmail() {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => console.log('Logged in with email successfully'))
      .catch(err => {
        console.log('Log in with email error: ', err)
        this.closeLogInModal()
      })
  }
  logOut() {
    firebase.auth().signOut()
      .then(() => console.log('signed-out successfully'))
      .catch(err => console.log('sign-out error', err))
  }
  openLogInModal() {
    this.setState({ logInModalIsOpen: true })
  }
  closeLogInModal() {
    this.setState({ logInModalIsOpen: false })
  }
  render() {
    return (
      <div id='navbar-ctn'>
        <Navbar />
        {this.authButton()}
        <Modal
          className='modal'
          isOpen={this.state.logInModalIsOpen}
          onRequestClose={this.closeLogInModal}
          contentLabel="Example Modal"
          style={styles}
        >
          <h2>Hello</h2>
          <Button onClick={() => this.closeLogInModal()}>close</Button>
          <Button background='facebook' onClick={() => this.logIn('facebook')}>Log In With Facebook</Button>
          <Button background='github' onClick={() => this.logIn('github')}>Log In With Github</Button>
          <Button background='google' onClick={() => this.logIn('google')}>Log In With Google</Button>
          <Link to='/signup/create-account' onClick={() => this.closeLogInModal()}>Need to create an account?</Link>
        </Modal>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { user: state.user }
}

const styles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)'
  },
  content : {
    position                   : 'absolute',
    top                        : '40px',
    left                       : '40px',
    right                      : '40px',
    bottom                     : '40px',
    border                     : '1px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px'

  }
}

export default connect(mapStateToProps, actions)(NavbarCtn)
