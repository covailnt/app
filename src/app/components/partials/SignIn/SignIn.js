import { Button, Link } from '~/components/elements'
import { Input } from '~/components/partials'
import { signInRequested } from '~/store/actions'
import { EMAIL, FACEBOOK, GITHUB, GOOGLE, PROVIDER } from '~/utils/constants'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Modal from 'react-modal'
import { connect } from 'react-redux'

class SignIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      logInModalIsOpen: false,
      menuOpen: false,
      password: '',
      validEmail: false,
      validPassword: false,
    }
  }
  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen })
  }
  openLogInModal() {
    this.setState({ logInModalIsOpen: true })
  }
  closeLogInModal() {
    this.setState({ logInModalIsOpen: false })
  }
  updateEmail(e, errors) {
    this.setState({
      email: e.target.value,
      validEmail: errors.length === 0,
    })
  }
  updatePassword(e, errors) {
    this.setState({
      password: e.target.value,
      validPassword: errors.length === 0,
    })
  }
  signIn(type, data) {
    this.props.signInRequested({
      type,
      data: {
        provider: data,
      },
    })
  }
  render() {
    return (
      <div>
        <Button m={3} onClick={() => this.openLogInModal()}>
          Log In
        </Button>
        <Modal
          isOpen={this.state.logInModalIsOpen}
          onRequestClose={this.closeLogInModal}
          contentLabel="Example Modal"
          style={styles}
        >
          <h2>Login</h2>
          <Input
            type="email"
            onChange={(e, errors) => this.updateEmail(e, errors)}
            value={this.state.email}
            validations={['required', 'email']}
            label="Email"
          />
          <Input
            type="password"
            onChange={(e, errors) => this.updatePassword(e, errors)}
            value={this.state.password}
            validations={['required']}
            label="Password"
          />
          <Button
            onClick={() =>
              this.signIn(EMAIL, {
                email: this.state.email,
                password: this.state.password,
              })
            }
            disabled={!(this.state.validEmail && this.state.validPassword)}
          >
            Log In With Email
          </Button>

          <Button bg="facebook" onClick={() => this.signIn(PROVIDER, FACEBOOK)}>
            Log In With Facebook
          </Button>

          <Button bg="github" onClick={() => this.signIn(PROVIDER, GITHUB)}>
            Log In With Github
          </Button>

          <Button bg="google" onClick={() => this.signIn(PROVIDER, GOOGLE)}>
            Log In With Google
          </Button>

          <Link
            href="/signup/create-account"
            onClick={() => this.closeLogInModal()}
          >
            Need to create an account?
          </Link>
          <Button onClick={() => this.closeLogInModal()}>close</Button>
        </Modal>
      </div>
    )
  }
}

SignIn.propTypes = {
  signInRequested: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
  return { user: state.user }
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
  },
  content: {
    position: 'absolute',
    top: '40px',
    left: '40px',
    right: '40px',
    bottom: '40px',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px',
  },
}

export default connect(mapStateToProps, { signInRequested })(SignIn)
