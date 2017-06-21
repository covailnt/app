import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
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
      .then(() => {
        console.log('it worked')
        this.props.history.push('/signup/create-account/step-1')
      })
      .catch(err => console.log('Firebase createUserWithEmail error', err))
  }
  createUser(socialProvider) {
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
      .catch(err => console.log(`${socialProvider} auth error`, err))
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
        <Button onClick={() => this.createUserWithEmail(this.state.email)}>Get me in</Button><br />
        <Button background='facebook' onClick={() => this.createUser('facebook')}>Create Account With Facebook</Button>
        <Button background='github' onClick={() => this.createUser('github')}>Create Account With Github</Button>
        <Button background='google' onClick={() => this.createUser('google')}>Create Account With Google</Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default withRouter(connect(mapStateToProps)(CreateAccount))
