import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Flexbox, Button, Heading } from 'components/elements'
import DeskLamp from 'images/signup/deskLamp.png'
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
      <Flexbox className={classes.content} justify="center" flexWrap="wrap">
        <Flexbox className={classes.fields} direction="column" justify="flex-start" align="center">
          <Heading level={1} color="primary">Let&apos;s Do This Thing</Heading>
          <Heading level={3}>We just need your email address</Heading>
          <input className={classes.emailInput} type="text" onChange={e => this.updateEmail(e)} value={this.state.email} placeholder="user@example.com" />
          <Heading level={5}>We&apos;ll send you an email to set your password later.</Heading>
          <Button onClick={() => createUserWithEmail(this.state.email, this)}>Get me in</Button><br />
          <Heading level={3}>Or social sign-in</Heading>

          <Button
            background="facebook"
            onClick={() => this.signIn(PROVIDER, FACEBOOK)}
          >
            Create account with Facebook
          </Button>

          <Button
            background="github"
            onClick={() => this.signIn(PROVIDER, GITHUB)}
          >
            Create account with Github
          </Button>

          <Button
            background="google"
            onClick={() => this.signIn(PROVIDER, GOOGLE)}
          >
            Create account with Google
          </Button>
        </Flexbox>
        <div className={classes.deskLampWrapper}>
          <img className={classes.deskLamp} alt="DeskLamp" src={DeskLamp} />
        </div>
      </Flexbox>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default withRouter(connect(mapStateToProps)(CreateAccount))
