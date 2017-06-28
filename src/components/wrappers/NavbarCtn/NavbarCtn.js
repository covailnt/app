import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Avatar, Button } from 'components/elements'
import { Navbar } from 'components/groups'
import { connect } from 'react-redux'
import firebase from 'refire/firebase'
import { logInWithEmail, logInWithProvider } from 'refire/auth'
import Modal from 'react-modal'
import theme from 'theme'

class NavbarCtn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      logInModalIsOpen: false,
      menuOpen: false,
      password: '',
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const { user, history } = this.props
    if (user && !prevProps.user && history.location.pathname === '/') {
      this.closeLogInModal()
      this.props.history.push('/profile')
    }
  }
  menuButton() {
    const { user } = this.props

    return user
      ? <Avatar onClick={() => this.toggleMenu()} src={user.providerData[0].photoURL} size='50px' />
      : <Button onClick={() => this.openLogInModal()}>Log In</Button>
  }
  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen })
  }
  logInWithEmail() {
    logInWithEmail(this.state.email, this.state.password)
    this.closeLogInModal()
  }
  openLogInModal() {
    this.setState({ logInModalIsOpen: true })
  }
  closeLogInModal() {
    this.setState({ logInModalIsOpen: false })
  }
  updateEmail(e) {
    this.setState({ email: e.target.value })
  }
  updatePassword(e) {
    this.setState({ password: e.target.value })
  }
  render() {
    return (
      <div id='navbar-ctn' style={{background: theme.color.black}}>
        <Navbar menuOpen={this.state.menuOpen} />
        {this.menuButton()}
        <Modal
          className='modal'
          isOpen={this.state.logInModalIsOpen}
          onRequestClose={this.closeLogInModal}
          contentLabel="Example Modal"
          style={styles}>
            <h2>Hello</h2>
            <Button onClick={() => this.closeLogInModal()}>close</Button>
            <input type="text" onChange={(e) => this.updateEmail(e)} value={this.state.email} />
            <input type="text" onChange={(e) => this.updatePassword(e)} value={this.state.password} />
            <Button onClick={() => this.logInWithEmail(this.state.email, this.state.password)}>Log In With Email</Button>
            <Button
              background='facebook'
              onClick={() => logInWithProvider('facebook')}>
                Log In With Facebook
            </Button>
            <Button
              background='github'
              onClick={() => logInWithProvider('github')}>
                Log In With Github
            </Button>
            <Button
              background='google'
              onClick={() => logInWithProvider('google')}>
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

export default withRouter(connect(mapStateToProps)(NavbarCtn))
