import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Button, Heading } from 'components/elements'
import classes from './CreateAccount.scss'

class CreateAccount extends Component {
  constructor(props) {
    super(props)
    this.state = { email: '' }
  }
  updateEmail(e) {
    this.setState({ email: e.target.value })
  }
  render() {
    return (
      <div>
        <Heading level={1}>Let&apos;s Do This Thing</Heading>
        <Heading level={2}>We just need your email address</Heading>
        <input type="text" onChange={e => this.updateEmail(e)} value={this.state.email} />
        <Heading level={5}>We&apos;ll send you an email to set your password later.</Heading>
        <Button onClick={() => createUserWithEmail(this.state.email, this)}>Get me in</Button><br />
        <Button
          onClick={() => this.signIn(EMAIL, { email: this.state.email, password: this.state.password })}
        >
          Log In With Email
        </Button>

        <Button
          background="facebook"
          onClick={() => this.signIn(PROVIDER, FACEBOOK)}
        >
          Log In With Facebook
        </Button>

        <Button
          background="github"
          onClick={() => this.signIn(PROVIDER, GITHUB)}
        >
          Log In With Github
        </Button>

        <Button
          background="google"
          onClick={() => this.signIn(PROVIDER, GOOGLE)}
        >
          Log In With Google
        </Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default withRouter(connect(mapStateToProps)(CreateAccount))
