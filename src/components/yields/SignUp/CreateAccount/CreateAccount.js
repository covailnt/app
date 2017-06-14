import React, { Component } from 'react'
import { connect } from 'react-redux'
import firebase from 'refire/firebase'
import generator from 'generate-password'
import { Button, Heading } from 'components/elements'

class CreateAccount extends Component {
  constructor(props) {
    super(props)
    this.state = { email: '' }
  }
  updateEmail(e) {
    this.setState({ email: e.target.value })
  }
  createUserWithEmail(email) {
    const password = generator.generate({
      length: 10,
      numbers: true,
      symbols: false,
      uppercase: true,
    })

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => console.log('it worked'))
      .catch(err => console.log('Firebase createUserWithEmail error', err))
  }
  createUserWithGoogle() {
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
    firebase.auth().signOut()
      .then(() => console.log('signed-out successfully'))
      .catch(err => console.log('sign-out error', err))
  }
  render() {
    return (
      <div className='signup-ctn'>
        <Heading level={1}>Let's Do This Thing</Heading>
        <Heading level={2}>We just need your email address</Heading>
        <input type="text" onChange={(e) => this.updateEmail(e)} value={this.state.email} />
        <Heading level={5}>We'll send you an email to set your password later.</Heading>
        <button onClick={() => this.createUserWithEmail(this.state.email)}>Get me in</button><br />
        <button onClick={() => this.createUserWithGoogle()}>Create Account With Google</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(CreateAccount)
