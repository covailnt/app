import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Button } from 'components/elements'
import { Navbar } from 'components/groups'
import { connect } from 'react-redux'
import { logInWithProvider } from 'actions'
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
          style={styles}>
            <h2>Hello</h2>
            <Button onClick={() => this.closeLogInModal()}>close</Button>
            <Button
              background='facebook'
              onClick={() => this.props.logInWithProvider('facebook')}>
                Log In With Facebook
            </Button>
            <Button
              background='github'
              onClick={() => this.props.logInWithProvider('github')}>
                Log In With Github
            </Button>
            <Button
              background='google'
              onClick={() => this.props.logInWithProvider('google')}>
                Log In With Google
            </Button>
            <Link
              to='/signup/create-account'
              onClick={() => this.closeLogInModal()}>
                Need to create an account?
            </Link>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => {
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

export default withRouter(connect(mapStateToProps, { logInWithProvider })(NavbarCtn))
